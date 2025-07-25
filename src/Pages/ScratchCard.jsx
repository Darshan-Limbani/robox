import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import ScratchAndWin from "../Components/ScratchCard.jsx";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ScratchCard = () => {
  
  
  // display header based on the routes
  
  const location = useLocation();
  
  const path = location.pathname;
  const [isScratchCard] = useState(path.includes("lucky-scratch"));
  
  return (
    <main className="flex flex-col text-sm text-black bg-white max-w-[360px] w-full h-full ">
      
      <div className={"flex flex-col h-full"}>
        
        <ProfileHeader
          profileImageSrc={back_arr}
          title={isScratchCard ? "Lucky Scratch" : "Win Scratch"}
        />
        {/*<Header />*/}
        <div className={"w-full flex flex-col justify-center items-center"}>
          
          <ScratchAndWin isScratchCard={isScratchCard}/>
        </div>
      </div>
    </main>
  );
}

export default ScratchCard;
