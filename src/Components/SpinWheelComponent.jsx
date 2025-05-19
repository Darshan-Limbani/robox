import React, { useState } from "react";
import { Wheel } from 'react-custom-roulette'
import sp0 from "./../assets/sp0.svg"
import sp3 from "./../assets/sp3.svg"
import sp5 from "./../assets/sp5.svg"
import sp7 from "./../assets/sp7.svg"
import sp9 from "./../assets/sp9.svg"
import sp11 from "./../assets/sp11.svg"
import sp13 from "./../assets/sp13.svg"
import sp15 from "./../assets/sp15.svg"
import sp18 from "./../assets/sp18.svg"
import sp20 from "./../assets/sp20.svg"
import sp22 from "./../assets/sp22.svg"
import sp24 from "./../assets/sp24.svg"
import onePx from "./../assets/1px.png"
import pointer2 from "./../assets/pointer_2.svg"
import { RedeemButton } from "./RedeemButton.jsx";
import { usePoints } from "../PointsProvider.jsx";
import Dialog from "./DialogBox.jsx";
import { canUseFeature, incrementUsage } from "../utils/PointsUtils.js";

const data = [
  {
    option: '0',
    image: { uri: sp0 },
    style: {
      backgroundColor: 'rgba(1, 98, 120, 1)',
    }
  },
  {
    option: '3',
    image: { uri: sp3 },
    style: {
      backgroundColor: "rgba(128, 187, 201, 1)"
    }
  },
  {
    option: '5',
    image: { uri: sp5 },
    style: {
      backgroundColor: 'rgba(1, 98, 120, 1)',
    }
  },
  {
    option: '7',
    image: { uri: sp7 },
    style: {
      backgroundColor: "rgba(128, 187, 201, 1)"
    }
  },
  {
    option: '9',
    image: { uri: sp9 },
    style: {
      backgroundColor: 'rgba(1, 98, 120, 1)',
    }
  },
  {
    option: '11',
    image: { uri: sp11 },
    style: {
      backgroundColor: "rgba(128, 187, 201, 1)"
    }
  },
  {
    option: '13',
    image: { uri: sp13 },
    style: {
      backgroundColor: 'rgba(1, 98, 120, 1)',
    }
  },
  {
    option: '15',
    image: { uri: sp15 },
    style: {
      backgroundColor: "rgba(128, 187, 201, 1)"
    }
  },
  {
    option: '18',
    image: {
      uri: sp18
    },
    style: {
      backgroundColor: 'rgba(1, 98, 120, 1)',
    }
  },
  {
    option: '20',
    image: { uri: sp20 },
    style: {
      backgroundColor: "rgba(128, 187, 201, 1)"
    }
  },
  {
    option: '22',
    image: { uri: sp22 },
    style: {
      backgroundColor: 'rgba(1, 98, 120, 1)',
    }
  },
  {
    option: '24',
    image: { uri: sp24 },
    style: {
      backgroundColor: "rgba(128, 187, 201, 1)"
    }
  },

]

const SpinWheelComponent = () => {
  
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const { add } = usePoints();
  const [isOpen, setIsOpen] = useState(false);
  const [reward, setReward] = useState();
  console.log("Line: 119||SpinWheelComponent.jsx ~~ reward: ", reward);
  
  const handleSpinClick = () => {
    if (!canUseFeature('spin-wheel')) {
      alert('Scratch limit reached for today! Please try again tomorrow.');
      return;
    }
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      let index = (newPrizeNumber - 1 + data.length) % data.length;
      setReward(+data[index].option)
      console.log("Line: 118||SpinWheelComponent.jsx ~~ newPrizeNumber: ", newPrizeNumber);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  }
  const handleAdd = (e) => {
    e.preventDefault();
    add(reward);
    incrementUsage("spin-wheel");
    setIsOpen(false);
  }
  
  return (
    <div>
      {/*<SpinWHeelComponent/>*/}
      <Dialog open={isOpen} buttonText={"Add"} count={reward} onClick={handleAdd}>
      </Dialog>
      <div
        style={{
          overflow: "hidden",
          position: "relative",
        }}>
        {/*<div style={{
          background: "linear-gradient(180deg, #003541 0%, #0088A7 100%)",
          width: "250px",
          height: "250px",
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: -1,
        }}>
        </div>*/}
        <div className={"sw-wrapper"} style={{
          background: "linear-gradient(180deg, #003541 0%, #0088A7 100%)",
          borderRadius: "50%",
          border: "10px solid #003541",
          width: "280px",
          height: "280px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}>
          <img src={pointer2} style={{
            position: "absolute",
            top: "48%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 10
            
          }}/>
          
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            onStopSpinning={() => {
              setMustSpin(false);
              setIsOpen(true);
            }}
            // outerBorderColor={"#003541"}
            outerBorderWidth={1}
            innerRadius={0}
            radiusLineWidth={0}
            perpendicularText={true}
            pointerProps={{
              src: onePx
            }}
          />
        </div>
      </div>
      <div className={"mt-[55px]"}>
        <RedeemButton onClick={handleSpinClick}>Spin Now</RedeemButton>
      </div>
    </div>
  );
}

export default SpinWheelComponent;
