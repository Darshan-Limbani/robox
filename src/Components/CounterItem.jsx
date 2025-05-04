import React from "react";
import ArrRight from "../assets/ArrRight.svg"

const CounterItem = ({ title, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="flex overflow-hidden gap-5 justify-between px-6 py-5 w-full rounded-3xl bg-zinc-100 cursor-pointer">
      <h3 className="my-auto font-semibold">{title}</h3>
      <img
        src={ArrRight}
        style={{ width: "14px", height: "14px", display: "flex", alignSelf: "center" }}
        alt="Counter indicator"
        className="object-contain shrink-0 w-5 aspect-square"
      />
    </article>
  );
};

export default CounterItem;
