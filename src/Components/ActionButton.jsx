
const ActionButton = ({ imageSrc, label, onClick }) => {
  return (
    // <button className="flex flex-col w-[90px]">
    <button className="flex flex-col cursor-pointer" onClick={onClick}>
      <img
        src={imageSrc}
        className="object-contain w-full aspect-square rounded-[100px]"
        alt={label}
      />
      <span className="self-center mt-2.5">{label}</span>
    </button>
  );
}

export default ActionButton;
