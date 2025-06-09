
export const RedeemButton = ({ children, onClick }) => {
  
  return (
    <button
      onClick={onClick}
      className="w-full max-w-[328px] h-[47px] rounded-full bg-[#003541] hover:bg-[#00293a] text-white text-[18px] font-semibold"
    >
      {children}
    </button>
  );
};
