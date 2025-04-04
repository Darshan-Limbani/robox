import React from "react";

export const RedeemButton = ({ children, variant = "primary" }) => {
  const baseStyles =
    "overflow-hidden gap-2.5 self-stretch px-24 py-5 mt-5 text-lg text-center rounded-[100px]";
  const variantStyles =
    variant === "primary"
      ? "text-white bg-cyan-950"
      : "font-medium bg-neutral-100 border border-solid border-cyan-950 border-opacity-10";
  
  return (
    <button className={`${baseStyles} ${variantStyles}`}>{children}</button>
  );
};
