import CounterList from "../Components/CounterList.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import ScratchAndWin from "../Components/ScratchCard.jsx";

const ScratchAndWinPage = () => {
  return (
    <main className="flex overflow-hidden flex-col text-sm text-black bg-white max-w-[360px] w-full ">
      <ProfileHeader
        profileImageSrc={back_arr}
        title={"RBC Calculator"}
      />
      {/*<Header />*/}
      <div className={"w-full flex flex-col justify-center"}>
        <ScratchAndWin/>
      </div>
    </main>);
};

export default ScratchAndWinPage;
