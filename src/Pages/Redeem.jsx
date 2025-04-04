import React from "react";
import { RedeemInfo } from "../Components/RedeemInfo.jsx";
import { RedeemButton } from "../Components/RedeemButton.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";

function Redeem() {
  return (
    <main
      className="flex overflow-hidden flex-col items-center pb-60 text-sm font-semibold text-black bg-white max-w-[360px] rounded-[40px]">
      <ProfileHeader
        profileImageSrc={back_arr}
        title={"Redeem To Account"}
      />
      <RedeemInfo/>
      <RedeemButton>Redeem Server 1</RedeemButton>
      <RedeemButton>Redeem Server 2</RedeemButton>
    </main>
  );
}

export default Redeem;
