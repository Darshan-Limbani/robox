
import React from "react";
import ProcessFlow from "./ProcessFlow";
import { Ad } from "react-ad-manager";
import Footer from "./Footer.jsx";

export default function InstructionsContent() {
  return (
    <section className="flex flex-col px-4 mt-4 w-full text-lg font-semibold">
      <h2 className="self-start">Spin and scratch and Win</h2>
      <p className="mt-4 text-sm">
        With this app you can earn robox by playing alot of games like spinning the wheel and scratching the card or
        scratch the PB, Redeem will be available once you reach the minimum robux balance on your account and completing
        the steps announcing
      </p>
      <Ad
        adUnit='/21775744923/example/fixed-size-banner'
        name='div-ad-demo9'
        size={[300, 250]}
      />
      <ProcessFlow/>
      <div className={"mt-5"}>
      
      <Footer/>
      </div>
    </section>
  );
}
