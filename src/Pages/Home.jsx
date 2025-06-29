import ProfileHeader from "../Components/ProfileHeader.jsx";
import logo from "../assets/logo.svg"
import RewardedAd from "../Components/RewardAdComponent.jsx";
import HomeComponent from "../Components/HomeComponent.jsx";

const Home = () => {
  
  return (
    <main
      className="flex flex-col h-full text-black bg-white w-full max-w-[360px]">
      <RewardedAd adUnit={"/22639388115/rewarded_web_example"}/>
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
