import InputSection from "../Components/InputSection.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import { useLocation } from "react-router-dom";

const DailyRbxCounter = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const title = params.get("title");
  
  return (
    <>
      <main className="mx-auto my-0 w-full max-w-[360px] min-h-screen bg-white max-md:w-full max-sm:w-full">
        <ProfileHeader
          profileImageSrc={back_arr}
          title={title || "BC Daily Rbx Counter"}/>
        <InputSection/>
      </main>
    </>
  );
};

export default DailyRbxCounter;
