import ProfileHeader from "../Components/ProfileHeader.jsx";
import InstructionsContent from "../Components/InstructionsContent.jsx";
import back_arr from "../assets/back_arr.svg";

export default function HowToWin() {
  return (
    <article className="h-full flex flex-col text-black bg-white max-w-[360px] pb-4">
      {/*<StatusBar />*/}
      <ProfileHeader
        profileImageSrc={back_arr}
        title={"How To Win"}/>
      <InstructionsContent/>
    </article>
  );
}
