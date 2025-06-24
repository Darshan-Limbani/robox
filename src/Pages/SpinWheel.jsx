import SpinWheelComponent from "../Components/SpinWheelComponent.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import { RequestAds } from "../utils/google-publisher-tag.jsx";

const SpinWheel = () => {
  return (
    <>
      <main className="flex flex-col text-sm text-black bg-white max-w-[360px] w-full ">
        <div className={"flex flex-col h-full overflow-auto"}>
          
          <ProfileHeader
            profileImageSrc={back_arr}
            title={"Lucky Spin"}
          />
          <RequestAds/>
          <div className={"w-full flex flex-col justify-center items-center"}>
            <SpinWheelComponent/>
          </div>
        </div>
      </main>
    </>
  );
}

export default SpinWheel;
