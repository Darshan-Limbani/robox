import { useState } from 'react';

import ScratchCard from "react-scratchcard-v6"
import scratch from "../assets/scratch.png"
import { incrementUsage } from "../utils/PointsUtils.js";
import { usePoints } from "../PointsProvider.jsx";
import Dialog from "./DialogBox.jsx";
import { DefineAdSlot, DefineOutOfPageAdSlot } from "../utils/google-publisher-tag.jsx";
import RewardedAd from "./RewardAdComponent.jsx";
import { SCRATCH_AD } from "../utils/AdConfig.json"


const reward = [5, 7, 10, 12, 15, 18, 20, 22, 25];


const ScratchAndWin = ({ isScratchCard }) => {
  
  const [randomReward] = useState(Math.floor(Math.random() * reward.length))
  const [isOpen, setIsOpen] = useState(false)
  
  const { add } = usePoints();
  
  const onScratch = () => {
    // if (!canUseFeature(isScratchCard ? 'scratch' : 'lucky-scratch')) {
    //   alert('Scratch limit reached for today! Please try again tomorrow.');
    //   return;
    // }
    setIsOpen(true);
  };
  
  const handleAdd = () => {
    add(reward[randomReward]);
    incrementUsage(isScratchCard ? 'scratch' : 'lucky-scratch');
    setIsOpen(false);
    window.location.reload();
  }
  
  return (
    <>
      <Dialog open={isOpen} buttonText={"Add"} count={reward[randomReward]} onClick={handleAdd}>
      </Dialog>
      
      <DefineAdSlot size={SCRATCH_AD.BANNER_SLOT_1.size} adUnit={SCRATCH_AD.BANNER_SLOT_1.adUnit}/>
      {/*<RewardedAdComponent adUnit={"/22639388115/rewarded_web_example"}/>*/}
      <RewardedAd adUnit={SCRATCH_AD.REWARD_SLOT_1.adUnit}/>
      
      <DefineOutOfPageAdSlot
        adUnit={SCRATCH_AD.ANCHOR_SLOT_1.adUnit}
        format={SCRATCH_AD.ANCHOR_SLOT_1.format}
        targeting={SCRATCH_AD.ANCHOR_SLOT_1.targeting}
        key={SCRATCH_AD.ANCHOR_SLOT_1.key}
      />
      <span className={"touch-none"}>
      <ScratchCard
        height={280}
        width={280}
        image={scratch}
        brushSize={15}
        finishPercent={80}
        fadeOutOnComplete={false}
        onComplete={onScratch}
        resetAfter={2000}
        disable={true}
      >
        
        <div className="flex flex-col items-center justify-center w-full h-full p-5 text-center">
          <h2 className="text-lg font-semibold">Congratulations!</h2>
          <p className="mt-2 text-sm">You won</p>
          <p className="mt-2 text-lg font-bold">{reward[randomReward]} RBX</p>
        </div>
      
      </ScratchCard>
        </span>
    </>
  );
};

export default ScratchAndWin;