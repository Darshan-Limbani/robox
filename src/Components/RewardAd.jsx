import React, { useEffect, useRef, useState } from "react";
import { usePoints } from "../PointsProvider.jsx";

const RewardedAd = ({ showDialogFirst = true, adUnit }) => {
  const [status, setStatus] = useState("");
  console.log("Line: 6||RewardAd.jsx ~~ status: ", status);
  const [modalType, setModalType] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const rewardPayloadRef = useRef(null);
  const rewardedSlotRef = useRef(null);
  const { add } = usePoints();
  useEffect(() => {
    
    window.googletag = window.googletag || { cmd: [] };
    const { googletag } = window;
    
    googletag.cmd.push(() => {
      const slot = googletag.defineOutOfPageSlot(
        adUnit,
        googletag.enums.OutOfPageFormat.REWARDED
      );
      
      if (slot) {
        rewardedSlotRef.current = slot;
        slot.addService(googletag.pubads());
        
        googletag.pubads().addEventListener("rewardedSlotReady", (event) => {
          setStatus("Rewarded ad slot is ready.");
          
          if (document.getElementById("watchAdButton")) {
            document.getElementById("watchAdButton").onclick = () => {
              event.makeRewardedVisible();
              setStatus("Rewarded ad is active.");
              setModalType(""); // hide modal
            };
          }
          
          if (showDialogFirst) {
            setModalType("reward");
            setModalMessage("Watch an ad to receive a special reward?");
          } else {
            event.makeRewardedVisible();
            setStatus("Rewarded ad is active.");
          }
        });
        
        googletag.pubads().addEventListener("rewardedSlotClosed", dismissRewardedAd);
        googletag.pubads().addEventListener("rewardedSlotGranted", (event) => {
          rewardPayloadRef.current = event.payload;
          add(event.payload.amount || 20);
          setStatus("Reward granted.");
        });
        
        googletag.pubads().addEventListener("slotRenderEnded", (event) => {
          if (event.slot === rewardedSlotRef.current && event.isEmpty) {
            setStatus("No ad returned for rewarded ad slot.");
          }
        });
        
        googletag.enableServices();
        googletag.display(slot);
      } else {
        setStatus("Rewarded ads are not supported on this page.");
      }
    });
    
    return () => {
      if (rewardedSlotRef.current) {
        window.googletag?.destroySlots([rewardedSlotRef.current]);
      }
    };
  }, [showDialogFirst]);
  
  const dismissRewardedAd = () => {
    if (rewardPayloadRef.current) {
      setModalMessage(
        `You have been rewarded ${rewardPayloadRef.current.amount} ${rewardPayloadRef.current.type}!`
      );
      setModalType("grant");
      rewardPayloadRef.current = null;
    } else {
      setModalType(""); // Hide modal
    }
    setStatus("Rewarded ad has been closed.");
  };
  
  return (
    <div>
      <h1>{status}</h1>
      <div className={`modal ${modalType ? "show" : ""}`} data-type={modalType}>
        <div className="modalDialog">
          <p id="modalMessage">{modalMessage}</p>
          
          {modalType === "grant" && (
            <span className="grantButtons">
              <input
                id="closeButton"
                type="button"
                value="Close"
                onClick={dismissRewardedAd}
              />
            </span>
          )}
          
          {modalType === "reward" && (
            <span className="rewardButtons">
              <input type="button" id="watchAdButton" value="Yes"/>
              <input
                id="noRewardButton"
                type="button"
                value="No"
                onClick={dismissRewardedAd}
              />
            </span>
          )}
        </div>
      </div>
      
      <style>{`
        .modal {
          display: none;
          position: fixed;
          z-index: 100;
          padding-top: 300px;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }
        .modal.show {
          display: block;
        }
        .modalDialog {
          margin: auto;
          padding: 16px;
          background-color: white;
          text-align: center;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .modal input[type="button"] {
          padding: 0.5rem;
          background: rgba(1, 98, 120, 1);
          border: none;
          border-radius: 4px;
          margin: 4px;
          color: white;
        }
        .rewardButtons{
          margin-top: 10px;
          display:flex;
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default RewardedAd;
