import InputSection from "../Components/InputSection.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";

const DailyRbxCounter = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <main className="mx-auto my-0 w-full max-w-screen-md min-h-screen bg-white max-md:w-full max-sm:w-full">
        <ProfileHeader
          profileImageSrc={back_arr}
          title={"BC Daily Rbx Counter"}/>
        <InputSection/>
      </main>
    </>
  );
};

export default DailyRbxCounter;
