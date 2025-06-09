import React from "react";
import CounterList from "../Components/CounterList.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";

const BcRBXCounter = () => {
  return (
    <main className="flex overflow-hidden flex-col text-sm text-black bg-white max-w-[360px] w-full ">
      <ProfileHeader
        profileImageSrc={back_arr}
        title={"RBC Calculator"}
      />
      
      {/*<Header />*/}
      <CounterList/>
    </main>);
};

export default BcRBXCounter;
