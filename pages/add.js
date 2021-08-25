import Header from "./components/Home/Header";
import Button from "@material-tailwind/react/Button";
import Draft from './components/Home/Draft';
import { useState } from 'react';

function add() {

  const [question, setQuestion] = useState("mt-10 mx-20");
  const [answer, setAnswer] = useState("mt-10 mx-20 hidden");

  let handleQuestionClick = () => {
    setQuestion("mt-10 mx-20")
    setAnswer("mt-10 mx-20 hidden")
    console.log("question")
  }

  let handleAnswerClick = () => {
    setQuestion("mt-10 mx-20 hidden")
    setAnswer("mt-10 mx-20")
    console.log("answer")
  }

  return (
    <div className="">
      <div>
        <Header />
      </div>
      <div className="bg-gray-200 h-screen">
        <div className="bg-white px-48 mt-16 mb-5 pb-10">
          <div className="flex flex-row">
            <h1 className="font-bold text-4xl text-blue-900 mr-96">
              Introduction to Logic
            </h1>
            <h1 className="font-normal text-4xl text-blue-900">Week 1</h1>
            <h1 className="font-medium text-4xl text-blue-900">Lecture 1</h1>
          </div>
          <div className="flex justify-end mt-10 pr-44">
            <Button
              color="lightBlue"
              buttonType="filled"
              size="lg"
              rounded={false}
              block={false}
              iconOnly={false}
              ripple="light"
            >
              Save and Finish
            </Button>
          </div>
        </div>
        <div className="flex flex-row w-1/4 border-2 ml-20">
          <Button
          color="lightBlue"
          buttonType="link"
          size="regular"
          rounded={false}
          block={false}
          iconOnly={false}
          ripple="dark"
          onClick={handleQuestionClick}
          >Question</Button>
          
          <Button
          onClick={handleAnswerClick}
          >Answer</Button>
        </div>
        
        {/* Editable part */}
        <div className={question}>
            <Draft />
        </div>

        <div className={answer}>
            <Draft />
        </div>
      </div>
    </div>
  );
}

export default add;
