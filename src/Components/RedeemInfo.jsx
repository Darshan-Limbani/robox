import card from "../assets/card.svg"
import { DefineAdSlot, DefineOutOfPageAdSlot } from "../utils/google-publisher-tag.jsx";
import { RedeemButton } from "./RedeemButton.jsx";
import { useState } from "react";
import { usePoints } from "../PointsProvider.jsx";

import { REDEEM_AD } from "../utils/AdConfig.json"

import dialog from "../assets/dialog.png";
import dialogPoly from "../assets/DialogPoly.svg";
import logo from "../assets/logo.svg";

const Dialog = ({ open, onClose, onClick, buttonText = "Add", count = 0, message }) => {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-[#003541] text-white rounded-2xl p-6 w-80 shadow-xl">
        <img src={dialog} className={"rounded-2xl"}
             style={{
               mixBlendMode: "multiply",
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
             }}/>
        <div className=" relative flex flex-col items-center space-y-4" style={{ mixBlendMode: "unset", zIndex: 1 }}>
          
          <div
            style={{
              backgroundImage: `url(${dialogPoly})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              fontFamily: 'Roboto',
              fontWeight: 900,
              fontSize: '45.86px',
              leadingTrim: 'cap-height',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '120px',
              height: '120px',
            }}
            
            className={`text-[#003541] font-bold text-xl rounded-xl flex items-center justify-center shadow-inner`}>
            <img src={logo}/>
          </div>
          
          <p className="text-center text-sm">{message}</p>
          
          <button
            onClick={onClick}
            className="bg-white w-full text-black font-semibold rounded-full px-6 py-2 shadow hover:bg-gray-100 transition"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}


export const RedeemInfo = () => {
  
  const [open, setOpen] = useState(false);
  
  const [message, setMessage] = useState("Congratulation! you won");
  
  const { points } = usePoints();
  
  
  const handleRedeem = () => {
    
    if (points < 7500) {
      setMessage("You don't have enough points to redeem");
    } else {
      setMessage("Congratulation! you won 7500 points");
    }
    setOpen(true);
  }
  const handleClick = () => {
    setOpen(false);
  }
  
  return (<>
      <Dialog open={open} onClick={handleClick} message={message} buttonText={"Okay"}/>
      <DefineAdSlot size={REDEEM_AD.BANNER_SLOT_1.size} adUnit={REDEEM_AD.BANNER_SLOT_1.adUnit}/>
      <DefineOutOfPageAdSlot
        adUnit={REDEEM_AD.ANCHOR_SLOT_1.adUnit}
        format={REDEEM_AD.ANCHOR_SLOT_1.format}
        targeting={REDEEM_AD.ANCHOR_SLOT_1.targeting}
        key={REDEEM_AD.ANCHOR_SLOT_1.key}
      />
      <section className="flex flex-col items-center">
        <img
          src={card}
          alt="QR Code"
          className="object-contain mt-10 max-w-full aspect-square w-[120px]"
        />
        <div
          className="overflow-hidden gap-2.5 self-stretch px-5 py-2.5 mt-5 font-medium text-center border border-solid bg-neutral-100 border-cyan-950 border-opacity-10 rounded-[100px]">
          WIN ROBX
        </div>
        <h2 className="mt-5 text-lg text-center">Minimun Redeem is 7500</h2>
        <p className="mt-5 text-center">
          You can Redeem Using our Servers once you reach
          <br/>
          the minimum
        </p>
      </section>
      <div className={" flex  flex-col w-full mt-5 gap-5"}>
        <RedeemButton onClick={handleRedeem}>Redeem Server 1</RedeemButton>
        <RedeemButton onClick={handleRedeem}>Redeem Server 2</RedeemButton>
      </div>
    </>
  );
};
