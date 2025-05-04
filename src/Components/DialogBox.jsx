import dialog from "../assets/dialog.png"
import dialogPoly from "../assets/DialogPoly.svg"

export default function Dialog({ open, onClose, onClick, buttonText = "Add", count = 0 }) {
  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-[#003541] text-white rounded-2xl p-6 w-80 shadow-xl">
        <img src={dialog} className={"rounded-2xl"}
             style={{
               mixBlendMode: "multiply",
               position: "absolute",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
             }}/>
        <div className=" relative flex flex-col items-center space-y-4" style={{ mixBlendMode: "unset", zIndex: 1 }}>
          
          <div
            style={{
              backgroundImage: `url(${dialogPoly})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              fontFamily: 'Roboto',
              fontWeight: 900,
              fontSize: '45.86px',
              leadingTrim: 'cap-height',
              lineHeight: '100%',
              letterSpacing: '0%',
              textAlign: 'center',
              width: '120px',
              height: '120px',
            }}
            
            className={`text-[#003541] font-bold text-xl rounded-xl flex items-center justify-center shadow-inner`}>
            {count}
          </div>
          
          {/* Message */}
          <p className="text-center text-sm">Congratulation you won</p>
          
          {/* Button */}
          <button
            onClick={onClick}
            className="bg-white w-full text-black font-semibold rounded-full px-6 py-2 shadow hover:bg-gray-100 transition"
          >
            {buttonText}
          </button>
        </div>
        
        {/* Close on background click */}
        {/*<button*/}
        {/*  className="absolute top-2 right-3 text-white text-xl"*/}
        {/*  onClick={onClose}*/}
        {/*>*/}
        {/*  &times;*/}
        {/*</button>*/}
      </div>
    </div>
  );
}
