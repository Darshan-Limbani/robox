import ProfileHeader from "../Components/ProfileHeader.jsx";
import logo from "../assets/logo.svg"
import RewardedAd from "../Components/RewardAdComponent.jsx";
import HomeComponent from "../Components/HomeComponent.jsx";
import { HOME_AD } from "../utils/AdConfig.json"

const Home = () => {
  
  return (
    <main
      className="flex flex-col h-full text-black bg-white w-full max-w-[360px]">
      <RewardedAd adUnit={HOME_AD.REWARD_SLOT_1.adUnit}/>
      <ProfileHeader
        profileImageSrc={logo}
        title="RBC Counter"
        onClick={() => {
        }}
      />
      <HomeComponent/>
    </main>
  );
}

export default Home;
