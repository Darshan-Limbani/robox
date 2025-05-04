import React from "react";
import { IconGridItem } from "./IconGridItem";

export const IconGridRow = ({ items }) => {
  return (
    <section className="flex gap-5 justify-center items-start w-full">
      {items.map((item, index) => (
        <IconGridItem
          key={index}
          imageSrc={item.imageSrc}
          label={item.label}
          width={item.width}
        />
      ))}
    </section>
  );
};
