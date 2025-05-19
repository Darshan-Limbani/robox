import React from "react";
import { RedeemInfo } from "../Components/RedeemInfo.jsx";
import { RedeemButton } from "../Components/RedeemButton.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";

function Redeem() {
  return (
    <main
      className="flex overflow-hidden flex-col items-center w-full text-sm font-semibold text-black bg-white max-w-[360px] rounded-[40px]">
      <ProfileHeader
        profileImageSrc={back_arr}
        title={"Redeem To Account"}
      />
      <RedeemInfo/>
      <div className={" flex  flex-col w-full mt-5 gap-5"}>
        <RedeemButton>Redeem Server 1</RedeemButton>
        <RedeemButton>Redeem Server 2</RedeemButton>
      </div>
    
    </main>
  );
}

export default Redeem;
