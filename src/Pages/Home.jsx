import home_banner from "../assets/img.png";
import humberg from "../assets/humberg.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants.js";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import new_btn from "../assets/new_btn.svg";
import spin_wheel from "../assets/spin_wheel.svg";
import win_Scratch from "../assets/win_Scratch.svg";
import lucky_scratch from "../assets/lucky_scratch.svg";
import how_to_win from "../assets/how_to_win.svg";
import reedem_btn from "../assets/reedem_btn.svg";
import { IconGridItem } from "../Components/IconGridItem.jsx";
import React, { useState } from "react";
import DialogBox from "../Components/DialogBox.jsx";


const firstRow = [
  {
    imageSrc: new_btn,
    label: "Daily New RBX",
    width: "90px"
  },
  {
    imageSrc: spin_wheel,
    label: "Spin Wheel",
    width: "90px"
  },
  {
    imageSrc: win_Scratch,
    label: "Win Scratch",
    width: "90px"
  }
];

const secondRow = [
  {
    imageSrc: lucky_scratch,
    label: "Lucky Scratch",
    width: "87px"
  },
  {
    imageSrc: how_to_win,
    label: "How to Win",
    width: "90px"
  },
  {
    imageSrc: reedem_btn,
    label: "Redeem",
    width: "90px"
  }
];


const Home = () => {
  
  const navigate = useNavigate();
  
  const [isOpen, setIsOpen] = useState(true)
  
  /*const handleRxcClick = () => {
    
    navigate(ROUTES.DAILY_RBX_COUNTER);
    
  }
  
  const handleRedeemClick = () => {
    navigate(ROUTES.REDEEM);
  }*/
  
  
  const firstRow = [
    {
      imageSrc: new_btn,
      label: "Daily New RBX",
      width: "90px",
      onClick: () => {
        navigate(ROUTES.DAILY_RBX_COUNTER);
      }
    },
    {
      imageSrc: spin_wheel,
      label: "Spin Wheel",
      width: "90px",
      onClick: () => {
        navigate(ROUTES.SPIN_WHEEL);
      }
    },
    {
      imageSrc: win_Scratch,
      label: "Win Scratch",
      width: "90px",
      onClick: () => {
        navigate(ROUTES.SCRATCH_CARD);
      }
    }
  ];
  
  const secondRow = [
    {
      imageSrc: lucky_scratch,
      label: "Lucky Scratch",
      width: "90px",
      onClick: () => {
        navigate(ROUTES.LUCKY_SCRATCH);
      }
    },
    {
      imageSrc: how_to_win,
      label: "How to Win",
      width: "90px",
      onClick: () => {
        navigate(ROUTES.HOW_TO_WIN);
      }
    },
    {
      imageSrc: reedem_btn,
      label: "Redeem",
      width: "90px",
      onClick: () => {
        navigate(ROUTES.REDEEM);
      }
    }
  ];
  
  
  return (
    <main
      className="flex overflow-hidden flex-col text-black bg-white w-full max-w-[360px] rounded-[40px] justify-center">
      {/*<StatusBar*/}
      {/*  time="9:30"*/}
      {/*  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d88bb058f60c12fbdd8661d6f3e97248a37825eb?placeholderIfAbsent=true"*/}
      {/*/>*/}
      <ProfileHeader
        profileImageSrc={humberg}
        title="RBC Counter"
        count="20"
        onClick={() => {
        }}
      />
      <img
        src={home_banner}
        className="object-contain self-center mt-2.5 w-full rounded-3xl aspect-[1.64] max-w-[328px]"
        alt="RBC Counter main image"
      />
      {/*<section className="self-center mt-8 w-full text-sm text-center max-w-[310px]">
        <div className="flex gap-5 justify-center items-start w-full cursor-pointer">
          <ActionButton
            onClick={handleRxcClick}
            imageSrc={newBtn}
            label="Daily New RBX"
          />
        </div>
        <div className="flex gap-5 justify-center items-start mt-5 w-full whitespace-nowrap cursor-pointer">
          <ActionButton
            onClick={handleRedeemClick}
            imageSrc={redeemBtn}
            label="Redeem"
          />
        </div>
      </section>*/}
      
      <article className="px-px text-sm text-center text-black max-w-[360px] self-center mt-5">
        <div className="w-full py-7 text-sm">
          <section className="flex gap-5 justify-center items-start w-full">
            {firstRow.map((item, index) => (
              <IconGridItem
                key={index}
                imageSrc={item.imageSrc}
                label={item.label}
                width={item.width}
                onClick={item.onClick}
              />
            ))}
          </section>
          <div className="mt-5">
            <section className="flex gap-5 justify-center items-start w-full">
              {secondRow.map((item, index) => (
                <IconGridItem
                  key={index}
                  imageSrc={item.imageSrc}
                  label={item.label}
                  width={item.width}
                  onClick={item.onClick}
                />
              ))}
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}

export default Home;
