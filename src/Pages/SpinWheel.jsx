import React from "react";
import SpinWheelComponent from "../Components/SpinWHeelComponent.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";

const SpinWheel = () => {
  return (
    <>
      <main className="flex overflow-hidden flex-col text-sm text-black bg-white max-w-[360px] w-full rounded-[40px]">
        <ProfileHeader
          profileImageSrc={back_arr}
          title={"Lucky Spin"}
        />
        <div className={"w-full flex flex-col justify-center items-center"}>
          <SpinWheelComponent/>
        </div>
      </main>
    </>
  );
}

export default SpinWheel;
