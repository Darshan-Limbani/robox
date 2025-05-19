import { useState } from 'react';

import ScratchCard from "react-scratchcard-v6"
import scratch from "../assets/scratch.png"
import { canUseFeature, incrementUsage } from "../utils/PointsUtils.js";
import { usePoints } from "../PointsProvider.jsx";
import Dialog from "./DialogBox.jsx";


const reward = [5, 7, 10, 12, 15, 18, 20, 22, 25];


const ScratchAndWin = ({ isScratchCard }) => {
  
  const [randomReward] = useState(Math.floor(Math.random() * reward.length))
  const [isOpen, setIsOpen] = useState(false)
  
  const { add } = usePoints();
  
  const onScratch = () => {
    if (!canUseFeature(isScratchCard ? 'scratch' : 'lucky-scratch')) {
      alert('Scratch limit reached for today! Please try again tomorrow.');
      return;
    }
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
        
        {!canUseFeature(isScratchCard ? 'scratch' : 'lucky-scratch')
          ?
          <div className="flex flex-col items-center justify-center w-full h-full p-5 text-center">
            <h2 className="text-lg font-semibold">Scratch limit reached</h2>
            <p className="mt-2 text-sm">You have reached the limit for today.</p>
            <p className="mt-2 text-sm">Please try again tomorrow.</p>
          </div>
          :
          <div className="flex flex-col items-center justify-center w-full h-full p-5 text-center">
            <h2 className="text-lg font-semibold">Congratulations!</h2>
            <p className="mt-2 text-sm">You won</p>
            <p className="mt-2 text-lg font-bold">{reward[randomReward]} RBX</p>
          </div>}
      
      </ScratchCard>
    </>
  );
};

export default ScratchAndWin;