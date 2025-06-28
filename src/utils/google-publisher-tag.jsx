/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';

import sharedStyles from '../styles/shared.module.css';
import { RewardedModal } from './rewarded-modal';

// Official GPT sources.
const GPT_STANDARD_URL = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
const GPT_LIMITED_ADS_URL =
  'https://pagead2.googlesyndication.com/tag/js/gpt.js';

// Keep track of defined ad slots.
let adSlots = {};
let adSlotCount = 0;

if (typeof window !== 'undefined') {
  // Ensure we can interact with the GPT command array.
  window.googletag = window.googletag || { cmd: [] };
  
  // Prepare GPT to display ads.
  googletag.cmd.push(() => {
    // Disable initial load, to precisely control when ads are requested.
    // googletag.pubads().disableInitialLoad();
    
    // Enable SRA and services.
    // googletag.pubads().enableSingleRequest();
    googletag.enableServices();
  });
}

export function InitializeGPT({ limitedAds }) {
  // Reset tracking variables.
  adSlots = {};
  adSlotCount = 0;
  
  return (
    <script src={limitedAds ? GPT_LIMITED_ADS_URL : GPT_STANDARD_URL} async/>
  );
}

export function DefineAdSlot({ adUnit, size, targeting = [] }) {
  const slotId = `slot-${adSlotCount++}`;
  
  useEffect(() => {
    // Register the slot with GPT when the component is loaded.
    googletag.cmd.push(() => {
      const slot = googletag.defineSlot(adUnit, size, slotId);
      if (slot) {
        // Add targeting, if specified.
        targeting.map(([key, value]) => {
          slot.setTargeting(key, value);
        });
        
        slot.addService(googletag.pubads());
        
        googletag.display(slot);
        adSlots[slotId] = slot;
      }
    });
    
    // Clean up the slot when the component is unloaded.
    return () => {
      googletag.cmd.push(() => {
        if (adSlots[slotId]) {
          googletag.destroySlots([adSlots[slotId]]);
          delete adSlots[slotId];
        }
      });
    };
  }, []);
  
  // Create the ad slot container.
  return (
    <div
      className={`${sharedStyles.adSlot} ${sharedStyles.centered}`}
      style={getMinimumSlotSize(size)}
      id={slotId}
    ></div>
  );
}

export function DefineOutOfPageAdSlot({ adUnit, format, targeting = [] }) {
  const slotId = `slot-${adSlotCount++}`;
  
  useEffect(() => {
    // Register the slot with GPT when the component is loaded.
    googletag.cmd.push(() => {
      const slot = googletag.defineOutOfPageSlot(
        adUnit,
        googletag.enums.OutOfPageFormat[format]
      );
      if (slot) {
        // Add targeting, if specified.
        targeting.map(([key, value]) => {
          slot.setTargeting(key, value);
        });
        
        slot.addService(googletag.pubads()).setConfig({
          ...(format === "INTERSTITIAL" ? {
              interstitial: {
                triggers: {
                  unhideWindow: true,
                  navBar: true
                }
              }
            } : {}
          )
        });
        
        // document.getElementById(
        //   `${slotId}-status`
        // ).textContent = `${format} ad is loading aaa...`;
        
        if (format === 'REWARDED') {
          addRewardedAdEvents(slot, slotId);
        } else {
          addOutOfPageAdEvents(slot, format, slotId);
        }
        
        googletag.display(slot);
        adSlots[slotId] = slot;
      } else {
        // document.getElementById(
        //   `${slotId}-status`
        // ).textContent = `${format} ads are not supported on this page.`;
      }
    });
    
    // Clean up the slot when the component is unloaded.
    return () => {
      googletag.cmd.push(() => {
        if (adSlots[slotId]) {
          googletag.destroySlots([adSlots[slotId]]);
          delete adSlots[slotId];
        }
      });
    };
  }, []);
  
  // Create a container for reporting OOP ad status updates.
  return <div id={`${slotId}-status`}></div>;
}

export function RequestAds() {
  useEffect(() => {
    googletag.cmd.push(() => {
      // Request ads for all ad slots defined up to this point.
      //
      // In many real world scenarios, requesting ads for *all*
      // slots is not optimal. Instead, care should be taken to
      // only refresh newly added/updated slots.
      const slots = Object.values(adSlots);
      googletag.pubads().refresh(slots);
    });
  }, []);
}

function addOutOfPageAdEvents(slot, format, id) {
  const slotOnLoad = (event) => {
    if (slot === event.slot) {
      // if (format === 'INTERSTITIAL') {
      //   document.getElementById(
      //     `${id}-status`
      //   ).innerHTML = `<a href="https://www.example.com">${format} ad is loaded.</a>`;
      // } else {
      //   document.getElementById(
      //     `${id}-status`
      //   ).textContent = `${format} ad is loaded.`;
      // }
      
      // Remove the event listener since it's no longer needed.
      googletag.pubads().removeEventListener('slotOnload', slotOnLoad);
    }
  };
  
  const slotRenderEnded = (event) => {
    if (event.slot === slot && event.isEmpty) {
      // document.getElementById(
      //   `${id}-status`
      // ).textContent = `No ad returned for ${format} ad slot.`;
      
      // Remove the event listener since it's no longer needed.
      googletag
        .pubads()
        .removeEventListener('slotRenderEnded', slotRenderEnded);
    }
  };
  
  googletag.pubads().addEventListener('slotOnload', slotOnLoad);
  googletag.pubads().addEventListener('slotRenderEnded', slotRenderEnded);
}

function addRewardedAdEvents(slot, id) {
  const rewardedModal = new RewardedModal();
  let rewardPayload;
  
  const rewardedSlotReady = (event) => {
    // document.getElementById(`${id}-status`).textContent =
    //   'Rewarded ad slot is ready.';
    
    rewardedModal.showConsentDialog(
      // Code is executed if the user chooses to view the ad.
      () => {
        // Call makeRewardVisible() to display the rewarded ad.
        event.makeRewardedVisible();
        // document.getElementById(`${id}-status`).textContent =
        //   'Rewarded ad is active.';
      },
      // Code is executed if the user chooses not to view the ad.
      () => {
        // Destroy the rewarded ad slot, since it can't be reused.
        googletag.destroySlots([slot]);
        // document.getElementById(`${id}-status`).textContent =
        //   'Rewarded ad has been closed.';
      }
    );
    
    // Remove the event listener since it's no longer needed.
    googletag
      .pubads()
      .removeEventListener('rewardedSlotReady', rewardedSlotReady);
  };
  
  const rewardedSlotClosed = () => {
    if (rewardPayload) {
      // Display the reward.
      rewardedModal.showReward(rewardPayload);
    }
    
    // Destroy the slot, since it can't be reused.
    googletag.destroySlots([slot]);
    // document.getElementById(`${id}-status`).textContent =
    //   'Rewarded ad has been closed.';
    
    // Remove the event listener since it's no longer needed.
    googletag
      .pubads()
      .removeEventListener('rewardedSlotClosed', rewardedSlotClosed);
  };
  
  const rewardedSlotGranted = (event) => {
    // Store the reward payload.
    rewardPayload = event.payload;
    // document.getElementById(`${id}-status`).textContent = 'Reward granted.';
    
    // Remove the event listener since it's no longer needed.
    googletag
      .pubads()
      .removeEventListener('rewardedSlotGranted', rewardedSlotGranted);
  };
  
  const slotRenderEnded = (event) => {
    if (event.slot === slot && event.isEmpty) {
      // document.getElementById(`${id}-status`).textContent =
      //   'No ad returned for rewarded ad slot.';
      
      // Remove the event listener since it's no longer needed.
      googletag
        .pubads()
        .removeEventListener('slotRenderEnded', slotRenderEnded);
    }
  };
  
  googletag.pubads().addEventListener('rewardedSlotReady', rewardedSlotReady);
  googletag.pubads().addEventListener('rewardedSlotClosed', rewardedSlotClosed);
  googletag
    .pubads()
    .addEventListener('rewardedSlotGranted', rewardedSlotGranted);
  googletag.pubads().addEventListener('slotRenderEnded', slotRenderEnded);
}

/**
 * Determine minimum width and height values for an ad slot container
 * based on the configured slot sizes.
 *
 * This function is only provided for example purposes. See
 * [Minimize layout shift](https://developers.google.com/publisher-tag/guides/minimize-layout-shift)
 * to learn more about strategies for sizing ad slot containers.
 */
function getMinimumSlotSize(size) {
  const maxValue = Number.MAX_VALUE;
  
  let minW = Number.MAX_VALUE;
  let minH = Number.MAX_VALUE;
  
  if (Array.isArray(size)) {
    // Convert googletag.SingleSize to googletag.MultiSize for convenience.
    const sizes = size.length <= 2 && !Array.isArray(size[0]) ? [size] : size;
    
    for (const size of sizes) {
      if (Array.isArray(size) && size[0] !== 'fluid') {
        minW = Math.min(size[0], minW);
        minH = Math.min(size[1], minH);
      }
    }
  }
  
  return minW < maxValue && minH < maxValue
    ? // Static ad slot.
    { minWidth: `${minW}px`, minHeight: `${minH}px` }
    : // Fluid ad slot.
    { minWidth: '50%' };
}
