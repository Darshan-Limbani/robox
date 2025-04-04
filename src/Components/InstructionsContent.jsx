
import React from "react";
import ProcessFlow from "./ProcessFlow";

export default function InstructionsContent() {
  return (
    <section className="flex flex-col px-4 mt-4 w-full text-lg font-semibold">
      <h2 className="self-start">Spin and Acratch and Win</h2>
      <p className="mt-4 text-sm">
        With this app you can earn robux by playing alot of games like spinning the wheel and scratching the card or
        scratch the PB, Redeem will be available once you reach the minimum robux balance on your account and completing
        the steps announcing
      </p>
      <ProcessFlow/>
    </section>
  );
}
