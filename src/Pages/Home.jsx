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
import { Ad } from "react-ad-manager";



const Home = () => {
  
  const navigate = useNavigate();
  
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
      className="flex flex-col h-full text-black bg-white w-full max-w-[360px]">
      
      <ProfileHeader
        profileImageSrc={humberg}
        title="RBC Counter"
        count="20"
        onClick={() => {
        }}
      />
      <Ad
        adUnit='/21775744923/example/fixed-size-banner'
        name='div-ad-demo'
        size={[300, 250]}
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
      
      
      <article className="px-px h-full text-sm text-center text-black max-w-[360px] self-center mt-5">
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
          
          <Ad
            adUnit='/21775744923/example/interstitial'
            name='div-ad-demo1'
            // size={[300, 250]}
            type={"INTERSTITIAL"}
          />
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
