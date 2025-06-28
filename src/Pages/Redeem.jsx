import { RedeemInfo } from "../Components/RedeemInfo.jsx";
import { RedeemButton } from "../Components/RedeemButton.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import { DefineAdSlot, DefineOutOfPageAdSlot, RequestAds } from "../utils/google-publisher-tag.jsx";
import dialog from "../assets/dialog.png";
import dialogPoly from "../assets/DialogPoly.svg";
import { useState } from "react";
import { usePoints } from "../PointsProvider.jsx";
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


function Redeem() {
  
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
  
  return (
    <main
      className="flex h-full flex-col items-center w-full text-sm font-semibold text-black bg-white max-w-[360px] ">
      <div className="flex flex-col h-full">
        <Dialog open={open} onClick={handleClick} message={message} buttonText={"Okay"}/>
        <RequestAds/>
        <ProfileHeader
          profileImageSrc={back_arr}
          title={"Redeem To Account"}
        />
        <DefineAdSlot size={[300, 250]} adUnit={"/6355419/Travel/Europe/France/Paris"}/>
        <DefineOutOfPageAdSlot
          adUnit={"/6355419/Travel"}
          format={"BOTTOM_ANCHOR"}
          targeting={[["test", "anchor"]]}
          key={"redeem-out-of-page-ad"}
        />
        <RedeemInfo/>
        <div className={" flex  flex-col w-full mt-5 gap-5"}>
          <RedeemButton onClick={handleRedeem}>Redeem Server 1</RedeemButton>
          <RedeemButton onClick={handleRedeem}>Redeem Server 2</RedeemButton>
        </div>
      
      
      </div>
    </main>
  );
}

export default Redeem;
