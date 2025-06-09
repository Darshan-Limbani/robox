import React from "react";
import { RedeemInfo } from "../Components/RedeemInfo.jsx";
import { RedeemButton } from "../Components/RedeemButton.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import { Ad } from "react-ad-manager";
import Footer from "../Components/Footer.jsx";

function Redeem() {
  return (
    <main
      className="flex h-full flex-col items-center w-full text-sm font-semibold text-black bg-white max-w-[360px] ">
      <div className="flex flex-col h-full">
        <ProfileHeader
          profileImageSrc={back_arr}
          title={"Redeem To Account"}
        />
        <RedeemInfo/>
        <Ad
          adUnit='/21775744923/example/fixed-size-banner'
          name='div-ad-demo9'
          size={[300, 250]}
        />
        <div className={" flex  flex-col w-full mt-5 gap-5"}>
          <RedeemButton>Redeem Server 1</RedeemButton>
          <RedeemButton>Redeem Server 2</RedeemButton>
        </div>
      
      
      </div>
      <Footer/>
    </main>
  );
}

export default Redeem;
