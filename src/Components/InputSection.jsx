

import React, { useState } from "react";
import { Ad } from "react-ad-manager";

const InputSection = () => {
  const [days, setDays] = useState("");
  
  const handleCount = () => {
    // Implement counting logic here
    console.log("Counting for", days, "days");
  };
  
  return (
    <section className="px-4 py-2.5 max-sm:px-3 max-sm:py-2.5">
      <div className="flex p-6 mb-4 rounded-3xl bg-zinc-100 h-[150px]">
        <input
          type="number"
          placeholder="Enter number of days..."
          value={days}
          onChange={(e) => setDays(e.target.value)}
          className="w-full bg-transparent text-sm text-black placeholder-black placeholder-opacity-50 focus:outline-none"
          aria-label="Enter number of days"
        />
      </div>
      <button
        onClick={handleCount}
        className="w-full text-lg font-semibold text-white cursor-pointer bg-cyan-950 h-[47px] rounded-[100px] hover:bg-cyan-900 transition-colors"
      >
        Count Now
      </button>
      <Ad
        adUnit='/21775744923/example/fixed-size-banner'
        name='div-ad-demo7'
        size={[300, 250]}
      />
    </section>
  );
};

export default InputSection;
