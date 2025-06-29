import ProcessFlow from "./ProcessFlow";
import { DefineAdSlot, DefineOutOfPageAdSlot } from "../utils/google-publisher-tag.jsx";
import { HOW_TO_WIN_AD } from "../utils/AdConfig.json"

export default function InstructionsContent() {
  return (
    <section className="flex flex-col px-4 mt-4 w-full text-lg font-semibold">
      <h2 className="self-start">Spin and scratch and Win</h2>
      <DefineAdSlot size={HOW_TO_WIN_AD.BANNER_SLOT_1.size} adUnit={HOW_TO_WIN_AD.BANNER_SLOT_1.adUnit}/>
      <DefineOutOfPageAdSlot
        adUnit={HOW_TO_WIN_AD.ANCHOR_SLOT_1.adUnit}
        format={HOW_TO_WIN_AD.ANCHOR_SLOT_1.format}
        targeting={HOW_TO_WIN_AD.ANCHOR_SLOT_1.targeting}
        key={HOW_TO_WIN_AD.ANCHOR_SLOT_1.key}
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
