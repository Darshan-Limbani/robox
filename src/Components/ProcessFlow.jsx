import ProcessStep from "./ProcessStep";
import uFirstRedeem from "../assets/uFirstReedem.svg";
import uGetReward from "../assets/uGetReward.svg";
import uRegister from "../assets/uRegister.svg";

export default function ProcessFlow() {
  return (
    <div className="flex flex-col mt-14 w-full">
      <ProcessStep
        title={"User\nRegister"}
        imageSrc={uRegister}
        imagePosition="right"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c4b8b56a222ef2372f5e3588cdf4b3d051d9530?placeholderIfAbsent=true"
        alt="Arrow down"
        className="object-contain self-center mt-4 aspect-[0.7] w-[15px]"
      />
      <ProcessStep title={"User First\nRedeem"} className="mt-4" imageSrc={uFirstRedeem}/>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c4b8b56a222ef2372f5e3588cdf4b3d051d9530?placeholderIfAbsent=true"
        alt="Arrow down"
        className="object-contain self-center mt-4 aspect-[0.7] w-[15px]"
      />
      <ProcessStep
        title={"Get\nReward"}
        imageSrc={uGetReward}
        imagePosition="right"
        className="mt-4"
      />
    </div>
  );
}
