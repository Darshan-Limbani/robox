import ProfileHeader from "../Components/ProfileHeader.jsx";
import FeatureCard from "../Components/FeatureCard.jsx";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../utils/constants.js";
import rDollor from "../assets/r_dollor.svg";
import logic_quiz from "../assets/logic_quiz.svg";
import back_arr from "../assets/back_arr.svg";

function DailyRBXCounter() {
  const navigate = useNavigate();

  const featureCards = [
    {
      id: 1,
      iconSrc: rDollor,
      title: "Daily Free Robx Calculator",
      description: "Daily free robux counter to calculate",
      onClick: () => navigate(ROUTES.BC_RBX_COUNTER),
    },
    // {
    //   id: 2,
    //   iconSrc: rDollor,
    //   title: "Free RBX To Dollar",
    //   description: "Free RBC to dollar calculate",
    //   onClick: () => {

    //   }
    // },
    // {
    //   id: 3,
    //   iconSrc: rDollor,
    //   title: "Dollar To RBX Calculator",
    //   description: "Daily free robux counter to calculate",
    //   onClick: () => {
    //   }
    // },
    {
      id: 4,
      iconSrc: logic_quiz,
      title: "Logic Quiz Time",
      description: "Quiz to test your IQ & Earn coins",
      onClick: () => navigate(ROUTES.QUIZ),
    },
  ];

  return (
    <main
      className="flex flex-col w-full max-w-[360px] h-full bg-white text-black overflow-hidden"
      role="main"
      aria-label="RBC Calculator Features"
    >
      <div className="flex flex-col h-full">
        <ProfileHeader
          profileImageSrc={back_arr}
          title="RBC Calculator"
        />

        <section
          className="flex flex-col items-center w-full px-4 py-6 space-y-4"
          aria-label="Feature Cards"
        >
          <div className="grid grid-cols-1 gap-4 w-full sm:grid-cols-2">
            {featureCards.map((card) => (
              <FeatureCard
                key={card.id}
                onClick={card.onClick}
                iconSrc={card.iconSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default DailyRBXCounter;
