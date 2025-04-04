import ActionButton from "../Components/ActionButton.jsx";
import home_banner from "../assets/img.png";
import humberg from "../assets/humberg.svg";
import newBtn from "../assets/new_btn.svg";
import redeemBtn from "../assets/reedem_btn.svg";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constansts.js";
import ProfileHeader from "../Components/ProfileHeader.jsx";

const Home = () => {
  
  const navigate = useNavigate();
  
  const handleRxcClick = () => {
    
    navigate(ROUTES.DAILY_RBX_COUNTER);
    
  }
  
  const handleRedeemClick = () => {
    navigate(ROUTES.REDEEM);
  }
  
  
  return (
    <main
      className="flex overflow-hidden flex-col text-black bg-white max-w-[360px] rounded-[40px] justify-center">
      {/*<StatusBar*/}
      {/*  time="9:30"*/}
      {/*  iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/d88bb058f60c12fbdd8661d6f3e97248a37825eb?placeholderIfAbsent=true"*/}
      {/*/>*/}
      <ProfileHeader
        profileImageSrc={humberg}
        title="RBC Counter"
        count="20"
      />
      <img
        src={home_banner}
        className="object-contain self-center mt-2.5 w-full rounded-3xl aspect-[1.64] max-w-[328px]"
        alt="RBC Counter main image"
      />
      <section className="self-center mt-8 w-full text-sm text-center max-w-[310px]">
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
      </section>
    </main>
  );
}

export default Home;
