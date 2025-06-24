import { RedeemInfo } from "../Components/RedeemInfo.jsx";
import { RedeemButton } from "../Components/RedeemButton.jsx";
import ProfileHeader from "../Components/ProfileHeader.jsx";
import back_arr from "../assets/back_arr.svg";
import { DefineAdSlot, DefineOutOfPageAdSlot, RequestAds } from "../utils/google-publisher-tag.jsx";

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
        <DefineAdSlot size={[300, 250]} adUnit={"/6355419/Travel/Europe/France/Paris"}/>
        <DefineOutOfPageAdSlot
          adUnit={"/6355419/Travel"}
          format={"BOTTOM_ANCHOR"}
          targeting={[["test", "anchor"]]}
          key={"redeem-out-of-page-ad"}
        />
        <RedeemInfo/>
        <div className={" flex  flex-col w-full mt-5 gap-5"}>
          <RedeemButton>Redeem Server 1</RedeemButton>
          <RedeemButton>Redeem Server 2</RedeemButton>
        </div>
      
      
      </div>
    </main>
  );
}

export default Redeem;
