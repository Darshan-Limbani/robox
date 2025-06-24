/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * Displays a modal dialog for use with rewarded ads.
 *
 * This class is only provided for example purposes.
 */
export const RewardedModal = class {
  showConsentDialog(callbackIfYes, callbackIfNo) {
    this.callbackIfNo = callbackIfNo;
    this.callbackIfYes = callbackIfYes;
    this.showDialog('Watch an ad to receive a special reward?');
  }
  
  showReward({ amount, type }) {
    this.callbackIfNo = this.callbackIfYes = undefined;
    if (amount && type)
      this.showDialog(`You have been rewarded ${amount} ${type}!`, true);
    // this.showDialog(`You have been rewarded ${this.reward} RBX!`, true);
  }
  
  showDialog(message, rewardReceived = false) {
    this.dialog.textContent = message;
    const form = document.createElement('form');
    const buttons = form.appendChild(document.createElement('div'));
    buttons.style.cssText =
      'display: flex; justify-content: space-evenly; padding-top: 15px;';
    if (rewardReceived) {
      buttons.appendChild(this.createButton('Close'));
    } else {
      buttons.appendChild(this.createButton('Yes', 'yes'));
      buttons.appendChild(this.createButton('No'));
    }
    this.dialog.appendChild(form);
    this.dialog.showModal();
  }
  
  createButton(text, value = text) {
    const button = document.createElement('button');
    button.formMethod = 'dialog';
    button.textContent = text;
    button.value = value;
    return button;
  }
  
  constructor(reward) {
    // this.reward = reward;
    this.dialog = document.createElement('dialog');
    this.dialog.addEventListener('close', () => {
      if (this.dialog.returnValue === 'yes') {
        this.callbackIfYes?.();
      } else {
        this.callbackIfNo?.();
        this.callbackIfNo = this.callbackIfYes = undefined;
      }
    });
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        document.body.appendChild(this.dialog);
      });
    } else {
      document.body.appendChild(this.dialog);
    }
  }
};
