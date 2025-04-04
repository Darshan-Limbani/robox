import React from "react";

import card from "../assets/card.svg"

export const RedeemInfo = () => {
  return (
    <section className="flex flex-col items-center">
      <img
        src={card}
        alt="QR Code"
        className="object-contain mt-10 max-w-full aspect-square w-[120px]"
      />
      <div
        className="overflow-hidden gap-2.5 self-stretch px-5 py-2.5 mt-5 font-medium text-center border border-solid bg-neutral-100 border-cyan-950 border-opacity-10 rounded-[100px]">
        WIN ROBX
      </div>
      <h2 className="mt-5 text-lg text-center">Minimun Redeem is 7500</h2>
      <p className="mt-5 text-center">
        You can Redeem Using our Servers once you reach
        <br/>
        the minimum
      </p>
    </section>
  );
};
