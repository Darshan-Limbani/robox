import React from "react";
import SpinWheelComponent from "../Components/SpinWheelComponent.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import { Ad } from "react-ad-manager";
import Footer from "../Components/Footer.jsx";

const SpinWheel = () => {
  return (
    <>
      <main className="flex flex-col text-sm text-black bg-white max-w-[360px] w-full ">
        <div className={"flex flex-col h-full overflow-auto"}>
          
          <ProfileHeader
            profileImageSrc={back_arr}
            title={"Lucky Spin"}
          />
          <div className={"w-full flex flex-col justify-center items-center"}>
            <SpinWheelComponent/>
          </div>
          <Ad
            adUnit='/21775744923/example/fixed-size-banner'
            name='div-ad-demo'
            size={[300, 250]}
          />
        </div>
        <Footer/>
      </main>
    </>
  );
}

export default SpinWheel;
