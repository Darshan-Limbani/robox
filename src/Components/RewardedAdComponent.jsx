import { useCallback, useEffect, useRef, useState } from "react";
import { usePoints } from "../PointsProvider.jsx";

import { showRewardedPopup } from "../utils/AdConfig.json"

const RewardedAdComponent = (props) => {
  
  const {
    adUnit
  } = props;
  
  const [status, setStatus] = useState('');
  const [modalType, setModalType] = useState('');
  const [modalMessage, setModalMessage] = useState('');
  const rewardedSlotRef = useRef(null);
  const rewardPayloadRef = useRef(null);
  const { add } = usePoints();
  
  // Load the GPT script
  useEffect(() => {
    window.googletag = window.googletag || { cmd: [] };
    
    // Initialize GPT
    window.googletag.cmd.push(() => {
      rewardedSlotRef.current = window.googletag.defineOutOfPageSlot(
        adUnit,
        window.googletag.enums.OutOfPageFormat.REWARDED
      );
      
      if (rewardedSlotRef.current) {
        rewardedSlotRef.current.addService(window.googletag.pubads());
        
        window.googletag.pubads().addEventListener('rewardedSlotReady', (event) => {
          setStatus('Rewarded ad slot is ready.');
          if (!showRewardedPopup) {
            handleWatchAd()
          } else {
            displayModal('reward', 'Watch an ad to receive a special reward?');
          }
          // Store the event for later use in makeRewardedVisible
          rewardedSlotRef.current.makeRewardedVisibleEvent = event;
        });
        
        window.googletag.pubads().addEventListener('rewardedSlotClosed', dismissRewardedAd);
        
        window.googletag.pubads().addEventListener('rewardedSlotGranted', (event) => {
          rewardPayloadRef.current = event.payload;
          setStatus('Reward granted.');
        });
        
        window.googletag.pubads().addEventListener('slotRenderEnded', (event) => {
          if (event.slot === rewardedSlotRef.current && event.isEmpty) {
            setStatus('No ad returned for rewarded ad slot.');
          }
        });
        
        window.googletag.enableServices();
        window.googletag.display(rewardedSlotRef.current);
      } else {
        setStatus('Rewarded ads are not supported on this page.');
      }
    });
    // };
    
    return () => {
      // Clean up the script if the component unmounts
      // document.head.removeChild(script);
      // Destroy the slot if it exists
      if (window.googletag && rewardedSlotRef.current) {
        window.googletag.cmd.push(() => {
          window.googletag.destroySlots([rewardedSlotRef.current]);
        });
      }
    };
  }, []);
  
  const displayModal = useCallback((type = '', message = '') => {
    setModalType(type);
    setModalMessage(message);
  }, []);
  
  const dismissRewardedAd = useCallback(() => {
    if (rewardPayloadRef.current) {
      displayModal(
        'grant',
        `You have been rewarded ${rewardPayloadRef.current?.amount} ${rewardPayloadRef.current?.type}!`
      );
      add(rewardPayloadRef.current?.amount || 10);
      rewardPayloadRef.current = null;
    } else {
      displayModal(); // Close modal
    }
    setStatus('Rewarded ad has been closed.');
    
    if (rewardedSlotRef.current && window.googletag) {
      window.googletag.cmd.push(() => {
        window.googletag.destroySlots([rewardedSlotRef.current]);
      });
    }
  }, [displayModal]);
  
  const handleWatchAd = () => {
    if (rewardedSlotRef.current && rewardedSlotRef.current.makeRewardedVisibleEvent) {
      rewardedSlotRef.current.makeRewardedVisibleEvent.makeRewardedVisible();
      displayModal(); // Close modal
      setStatus('Rewarded ad is active.');
    }
  };
  
  return (
    <div>
      <div id="modal" className={`modal ${modalType ? 'active' : ''}`} data-type={modalType}>
        <div className="modalDialog">
          <p id="modalMessage">{modalMessage}</p>
          
          {modalType === 'grant' && (
            <span className="grantButtons">
              <input type="button" value="Close" onClick={dismissRewardedAd}/>
            </span>
          )}
          
          {modalType === 'reward' && (
            <span className="rewardButtons">
              <input type="button" id="watchAdButton" value="Yes" onClick={handleWatchAd}/>
              <input type="button" id="noRewardButton" value="No" onClick={dismissRewardedAd}/>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default RewardedAdComponent;