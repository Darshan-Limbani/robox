// components/AdSlot.js
import { useEffect } from 'react';

const AdSlot = () => {
  useEffect(() => {
    // Load GPT if not already loaded
    if (!window.googletag) {
      const gptScript = document.createElement('script');
      gptScript.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
      gptScript.async = true;
      gptScript.crossOrigin = 'anonymous';
      document.head.appendChild(gptScript);
    }
    
    // Wait for GPT to initialize
    window.googletag = window.googletag || { cmd: [] };
    
    window.googletag.cmd.push(function () {
      // Define ad slot
      window.googletag.defineSlot(
        '/23294041758/the_test_ad',
        [[120, 600], [120, 240], [120, 30], [200, 446], [160, 600]],
        'div-gpt-ad-1747759271642-0'
      ).addService(window.googletag.pubads());
      
      window.googletag.pubads().enableSingleRequest();
      window.googletag.enableServices();
      
      // Display the ad
      window.googletag.display('div-gpt-ad-1747759271642-0');
    });
  }, []);
  
  return (
    <div
      id="div-gpt-ad-1747759271642-0"
      style={{ minWidth: '120px', minHeight: '30px' }}
    />
  );
};

export default AdSlot;