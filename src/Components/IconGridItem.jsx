
export const IconGridItem = ({ imageSrc, label, width = "90px", onClick }) => {
  return (
    <figure className="relative flex flex-col cursor-pointer" style={{ width }} onClick={onClick}>
      <img
        src={imageSrc}
        alt={label}
        className="object-contain aspect-square rounded-[100px] w-full"
      />
      <figcaption className="mt-2.5 text-center">{label}</figcaption>
    </figure>
  );
};
