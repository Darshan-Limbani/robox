import React from "react";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import FeatureCard from "../Components/FeatureCard.jsx";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants.js";
import rDollor from "../assets/r_dollor.svg"
import logic_quiz from "../assets/logic_quiz.svg"
import back_arr from "../assets/back_arr.svg";
import { Ad, AdConfig, AdScript } from "react-ad-manager";
import Footer from "../Components/Footer.jsx";
function DailyRBXCounter() {
  
  const navigate = useNavigate();
  
  const featureCards = [
    {
      id: 1,
      iconSrc: rDollor,
      title: "Daily Free Robx Calculator",
      description: "Daily free robux counter to calculate",
      onClick: () => {
        console.log("clicked");
        navigate(ROUTES.BC_RBX_COUNTER);
      }
    },
    {
      id: 2,
      iconSrc: rDollor,
      title: "Free RBX To Dollar",
      description: "Free RBC to dollar calculate",
      onClick: () => {
      
      }
    },
    {
      id: 3,
      iconSrc: rDollor,
      title: "Dollar To RBX Calculator",
      description: "Daily free robux counter to calculate",
      onClick: () => {
      }
    },
    {
      id: 4,
      iconSrc: logic_quiz,
      title: "Logic Quiz Time",
      description: "Quiz to test your IQ & Earn coins",
      onClick: () => {
      }
    },
  ];
  
  return (
    <main className="flex overflow-hidden flex-col text-black bg-white w-full max-w-[360px] h-full ">
      <div className={"h-full flex flex-col"}>
      <ProfileHeader
      profileImageSrc={back_arr}
        title="RBC Calculator"
        count="20"
      />
      
      <div className={"flex items-center"}>
      
      <section className="flex items-center flex-col mt-2.5 w-full">
        <div className="flex gap-4 items-center w-full">
          <FeatureCard
            onClick={featureCards[0].onClick}
            iconSrc={featureCards[0].iconSrc}
            title={featureCards[0].title}
            description={featureCards[0].description}
          />
          <FeatureCard
            onClick={featureCards[1].onClick}
            iconSrc={featureCards[1].iconSrc}
            title={featureCards[1].title}
            description={featureCards[1].description}
          />
        </div>
        
        {/*<Ad*/}
        {/*  adUnit='/21775744923/example/fixed-size-banner'*/}
        {/*  name='div-ad-demo8'*/}
        {/*  size={[300, 250]}*/}
        {/*/>*/}
        <div className="flex gap-4 items-center mt-4 w-full">
          <FeatureCard
            onClick={featureCards[2].onClick}
            iconSrc={featureCards[2].iconSrc}
            title={featureCards[2].title}
            description={featureCards[2].description}
          />
          <FeatureCard
            onClick={featureCards[3].onClick}
            iconSrc={featureCards[3].iconSrc}
            title={featureCards[3].title}
            description={featureCards[3].description}
          />
          
        </div>
      </section>
      </div>
      
      </div>
      
      <Footer/>
      
    </main>
  );
}

export default DailyRBXCounter;
