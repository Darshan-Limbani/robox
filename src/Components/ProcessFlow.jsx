import ProcessStep from "./ProcessStep";
import uFirstRedeem from "../assets/uFirstReedem.svg";
import uGetReward from "../assets/uGetReward.svg";
import uRegister from "../assets/uRegister.svg";
import ArrDown from "../assets/ArrDown.svg";
import { DefineAdSlot, DefineOutOfPageAdSlot } from "../utils/google-publisher-tag.jsx";
import { HOW_TO_WIN_AD } from "../utils/AdConfig.json";

export default function ProcessFlow() {
  return (
    <div className="flex flex-col mt-14 w-full">
      <ProcessStep
        title={"User\nRegister"}
        imageSrc={uRegister}
        imagePosition="right"
      />
      <img
        src={ArrDown}
        alt="Arrow down"
        className="object-contain self-center mt-4 aspect-[0.7] w-[15px]"
      />
      <ProcessStep title={"User First\nRedeem"} className="mt-4" imageSrc={uFirstRedeem}/>
      <img
        src={ArrDown}
        alt="Arrow down"
        className="object-contain self-center mt-4 aspect-[0.7] w-[15px]"
      />
      <ProcessStep
        title={"Get\nReward"}
        imageSrc={uGetReward}
        imagePosition="right"
        className="mt-4"
      />
      <DefineAdSlot size={HOW_TO_WIN_AD.BANNER_SLOT_2.size} adUnit={HOW_TO_WIN_AD.BANNER_SLOT_2.adUnit}/>
      <div>
        {/* Content here */}
      </div>
    </div>
  );
}
