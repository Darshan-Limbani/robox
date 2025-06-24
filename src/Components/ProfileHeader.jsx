import { useNavigate } from "react-router-dom";
import coin from "../assets/coin.svg";
import { usePoints } from "../PointsProvider.jsx";

function ProfileHeader({ profileImageSrc, title, onClick }) {
  
  const { points } = usePoints();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  }
  
  return (
    <section className="flex gap-2 my-1 justify-between py-2 w-full bg-white">
      <div className="flex gap-4 text-lg font-bold">
        <img
          src={profileImageSrc}
          onClick={onClick ?? handleClick}
          alt="Profile"
          className="object-contain shrink-0 aspect-square rounded-[100px] w-[50px] cursor-pointer"
        />
        <span className="my-auto basis-auto">{title}</span>
      </div>
      
      <div
        className="flex items-center flex-row gap-2 overflow-hidden py-1.5 text-sm font-medium text-center whitespace-nowrap border border-solid bg-neutral-100 border-cyan-950 border-opacity-10 rounded-[100px] pr-[15px]">
        <img src={coin} alt="Coin" className="object-contain shrink-0 aspect-square w-[20px]  ml-2.5"/>
        {points || 0}
      </div>
    
    </section>
  );
}

export default ProfileHeader;
