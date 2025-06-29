import { useEffect, useState } from 'react';
import { DefineAdSlot, DefineOutOfPageAdSlot, RequestAds } from "../utils/google-publisher-tag.jsx";
import { usePoints } from "../PointsProvider.jsx";
import { QUIZ_AD } from "../utils/AdConfig.json"
import { showQuizAdAtTop } from "../utils/AdConfig.json"; // Assuming this is a utility to determine ad visibility

const getRandomNumber = (max) => Math.floor(Math.random() * max) + 1;

const generateMathQuestion = () => {
  const num1 = getRandomNumber(10);
  const num2 = getRandomNumber(10);
  const operators = ['+', '-', '*', '/'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  
  let correctAnswer;
  let questionText;
  
  switch (operator) {
    case '+':
      correctAnswer = num1 + num2;
      questionText = `${num1} + ${num2}`;
      break;
    case '-':
      correctAnswer = num1 - num2;
      questionText = `${num1} - ${num2}`;
      break;
    case '*':
      correctAnswer = num1 * num2;
      questionText = `${num1} * ${num2}`;
      break;
    case '/':
      correctAnswer = Math.floor(num1 / num2);
      questionText = `${num1} / ${num2} (rounded to integer)`;
      break;
    default:
      break;
  }
  
  const options = new Set([correctAnswer]);
  while (options.size < 4) {
    options.add(getRandomNumber(20));
  }
  
  return {
    questionText,
    correctAnswer,
    options: Array.from(options).sort(() => Math.random() - 0.5),
  };
};

const Quiz = () => {
  const [question, setQuestion] = useState({});
  const [reward, setReward] = useState(0);
  const [resultMessage, setResultMessage] = useState('');
  const [resultClass, setResultClass] = useState('');
  const { add } = usePoints();
  
  useEffect(() => {
    setQuestion(generateMathQuestion());
  }, []);
  
  const handleAnswer = (selectedAnswer) => {
    const isCorrect = selectedAnswer === question.correctAnswer;
    
    if (isCorrect) {
      setReward(prev => prev + 2);
      add(1);
      setResultMessage('Correct!');
      setResultClass('bg-green-100 text-green-800 border border-green-200');
    } else {
      setResultMessage(`Wrong! The correct answer was ${question.correctAnswer}`);
      setResultClass('bg-red-100 text-red-800 border border-red-200');
    }
    
    setTimeout(() => {
      setQuestion(generateMathQuestion());
      setResultMessage('');
      setResultClass('');
    }, 1000);
  };
  
  return (
    <div className="max-w-2xl mx-auto p-4">
      <RequestAds/>
      {showQuizAdAtTop &&
        <DefineAdSlot
          size={QUIZ_AD.BANNER_SLOT_1.size}
          adUnit={QUIZ_AD.BANNER_SLOT_1.adUnit}
        />
      }
      <DefineOutOfPageAdSlot
        adUnit={QUIZ_AD.ANCHOR_SLOT_1.adUnit}
        format={QUIZ_AD.ANCHOR_SLOT_1.format}
        targeting={QUIZ_AD.ANCHOR_SLOT_1.targeting}
        key={QUIZ_AD.ANCHOR_SLOT_1.key}
      />
      <div className="text-center my-8 p-4 bg-gray-50 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800">
          What is {question.questionText}?
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-xl mx-auto p-4">
        {question.options && question.options.map((option) => (
          <div key={option} className="group">
            <label
              className="flex items-center gap-3 p-4 bg-white border-2 border-gray-200 rounded-lg cursor-pointer transition-all duration-200 hover:border-green-500 hover:shadow-md hover:-translate-y-0.5">
              <input
                type="radio"
                name="option"
                value={option}
                onClick={() => handleAnswer(option)}
                className="w-5 h-5 cursor-pointer"
              />
              <span className="text-lg text-gray-700">{option}</span>
            </label>
          </div>
        ))}
      </div>
      
      {resultMessage && (
        <div className={`text-center my-4 p-3 rounded-lg font-medium ${resultClass}`}>
          {resultMessage}
        </div>
      )}
      
      {!showQuizAdAtTop &&
        <DefineAdSlot
          size={QUIZ_AD.BANNER_SLOT_1.size}
          adUnit={QUIZ_AD.BANNER_SLOT_1.adUnit}
        />
      }
    </div>
  );
};

export default Quiz;
