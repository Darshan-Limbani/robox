import React from "react";

const CounterItem = ({ title, onClick }) => {
  return (
    <article
      onClick={onClick}
      className="flex overflow-hidden gap-5 justify-between px-6 py-5 w-full rounded-3xl bg-zinc-100 cursor-pointer">
      <h3 className="my-auto font-semibold">{title}</h3>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/39f110c8b21dfc4df20172b19bb5cde44f629c4c?placeholderIfAbsent=true"
        alt="Counter indicator"
        className="object-contain shrink-0 w-5 aspect-square"
      />
    </article>
  );
};

export default CounterItem;
