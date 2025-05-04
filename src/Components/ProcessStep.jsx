
import React from "react";

export default function ProcessStep({
                                      title,
                                      imageSrc,
                                      imagePosition = "right",
                                      className = "",
                                    }) {
  const content = (
    <div className="my-auto">
      {title.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < title.split("\n").length - 1 && <br/>}
        </React.Fragment>
      ))}
    </div>
  );
  
  const image = imageSrc && (
    <img
      src={imageSrc}
      alt={title}
      className={`object-contain shrink-0 max-w-full ${
        imagePosition === "right"
          ? "self-start aspect-[1.34] w-[134px]"
          : "aspect-[1.06] w-[120px]"
      }`}
    />
  );
  
  return (
    <div
      className={`flex overflow-hidden gap-5 justify-between items-start w-full whitespace-nowrap rounded-3xl bg-zinc-100 ${
        imageSrc
          ? imagePosition === "right"
            ? "pt-5 pr-5 pl-11"
            : "px-9 pt-2"
          : "p-11"
      } ${className}`}
    >
      {imagePosition === "left" && image}
      {content}
      {imagePosition === "right" && image}
    </div>
  );
}
