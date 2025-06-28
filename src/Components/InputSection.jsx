import { useState } from "react";
import { DefineAdSlot, DefineOutOfPageAdSlot } from "../utils/google-publisher-tag.jsx";

const InputSection = () => {
  const [days, setDays] = useState();
  const [count, setCount] = useState()
  
  const handleCount = () => {
    if (!days || isNaN(days) || days <= 0) {
      alert("Please enter a valid number of days.");
      return;
    }
    setCount(days * 100);
    // Implement counting logic here
  };
  
  return (
    <section className="px-4 py-2.5 max-sm:px-3 max-sm:py-2.5">
      <DefineAdSlot
        size={[300, 250]}
        adUnit={"/6355419/Travel/Europe/France/Paris"}
      />
      <DefineOutOfPageAdSlot
        adUnit={"/6355419/Travel"}
        format={"BOTTOM_ANCHOR"}
        targeting={[["test", "anchor"]]}
        key={"input-out-of-page-ad"}
      />
      <div className="flex p-6 mb-4 rounded-3xl bg-zinc-100 h-[150px]">
        <input
          type="number"
          placeholder="Enter number of days..."
          value={days}
          min={0}
          onChange={(e) => setDays(e.target.value)}
          className="w-full bg-transparent text-sm text-black placeholder-black placeholder-opacity-50 focus:outline-none"
          aria-label="Enter number of days"
        />
      </div>
      {count && (
        <div
          className={`text-center my-4 p-3 rounded-lg font-medium bg-green-100 text-green-800 border border-green-200`}>
          {count} Robox
        </div>
      )}
      <button
        onClick={handleCount}
        className="w-full text-lg font-semibold text-white cursor-pointer bg-cyan-950 h-[47px] rounded-[100px] hover:bg-cyan-900 transition-colors"
      >
        Count Now
      </button>
    </section>
  );
};

export default InputSection;
