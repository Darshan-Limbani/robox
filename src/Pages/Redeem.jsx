import { RedeemInfo } from "../Components/RedeemInfo.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import { RequestAds } from "../utils/google-publisher-tag.jsx";


function Redeem() {
  
  return (
    <main
      className="flex h-full flex-col items-center w-full text-sm font-semibold text-black bg-white max-w-[360px] ">
      <div className="flex flex-col h-full">
        <RequestAds/>
        <ProfileHeader
          profileImageSrc={back_arr}
          title={"Redeem To Account"}
        />
        <RedeemInfo/>
      </div>
    </main>
  );
}

export default Redeem;
