
import React from "react";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import InstructionsContent from "../Components/InstructionsContent.jsx";
import back_arr from "../assets/back_arr.svg";
export default function HowToWin() {
  return (
    <article className="overflow-hidden pb-12 text-black bg-white max-w-[360px] rounded-[40px]">
      {/*<StatusBar />*/}
      <ProfileHeader
        profileImageSrc={back_arr}
        title={"How To Win"}/>
      <InstructionsContent/>
    </article>
  );
}
