import ProfileHeader from "../Components/ProfileHeader.jsx";
import Quiz from "../Components/Quiz.jsx";
import back_arr from "../assets/back_arr.svg";

function QuizPage() {
  return (
    <main
      className="flex flex-col h-full text-black bg-white w-full max-w-[360px]">
      <ProfileHeader
        profileImageSrc={back_arr}
        title="Quiz Time"
      />
      <Quiz />
    </main>
  );
}

export default QuizPage;