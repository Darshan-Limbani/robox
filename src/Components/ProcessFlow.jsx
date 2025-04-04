
import React from "react";
import ProcessStep from "./ProcessStep";

export default function ProcessFlow() {
  return (
    <div className="flex flex-col mt-14 w-full">
      <ProcessStep
        title="User\nRegister"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e087d37f0e2d3bc32643f6a693c53f7758e910f9?placeholderIfAbsent=true"
        imagePosition="right"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c4b8b56a222ef2372f5e3588cdf4b3d051d9530?placeholderIfAbsent=true"
        alt="Arrow down"
        className="object-contain self-center mt-4 aspect-[0.7] w-[15px]"
      />
      <ProcessStep title="User First\nRedeem" className="mt-4"/>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/1c4b8b56a222ef2372f5e3588cdf4b3d051d9530?placeholderIfAbsent=true"
        alt="Arrow down"
        className="object-contain self-center mt-4 aspect-[0.7] w-[15px]"
      />
      <ProcessStep
        title="Get\nReward"
        imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/e2543706cad23fb7de53e70ee7a21ee2a11687e3?placeholderIfAbsent=true"
        imagePosition="right"
        className="mt-4"
      />
    </div>
  );
}
