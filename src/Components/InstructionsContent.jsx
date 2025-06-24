import ProcessFlow from "./ProcessFlow";
import { DefineAdSlot, DefineOutOfPageAdSlot } from "../utils/google-publisher-tag.jsx";

export default function InstructionsContent() {
  return (
    <section className="flex flex-col px-4 mt-4 w-full text-lg font-semibold">
      <h2 className="self-start">Spin and scratch and Win</h2>
      <DefineAdSlot size={[300, 250]} adUnit={"/6355419/Travel/Europe/France/Paris"}/>
      <DefineOutOfPageAdSlot
        adUnit={"/6355419/Travel"}
        format={"BOTTOM_ANCHOR"}
        targeting={[["test", "anchor"]]}
        key={"input-out-of-page-ad"}
      />
      <p className="mt-4 text-sm">
        With this app you can earn robox by playing alot of games like spinning the wheel and scratching the card or
        scratch the PB, Redeem will be available once you reach the minimum robux balance on your account and completing
        the steps announcing
      </p>
      <ProcessFlow/>
    </section>
  );
}
