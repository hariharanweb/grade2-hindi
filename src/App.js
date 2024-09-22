import React, { useEffect, useState } from "react";
import QuestionAnswer from "./questionAnswer/QuestionAnswer";
import generateQuestionAnswers from "./language/questionsGenerator";

const App = () => {
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    setQuestionAnswers(generateQuestionAnswers(20))
  }, [])

  return (
    <div style={{textAlign: 'center'}}>
      <h1>Welcome to Hindi test</h1>
      <hr />
      {questionAnswers.length && <QuestionAnswer
        questionAnswer={questionAnswers[currentIndex]}
        questionIndex={currentIndex+1}
        onCorrectAnswerClick={() => {
          setCorrectAnswer(true);
          setWrongAnswer(false);
          setCorrectCount(correctCount+1);
          if(currentIndex < questionAnswers.length - 1)
            setCurrentIndex(currentIndex+1);
        }}
        onWrongAnswerClick={() => {
          setCorrectAnswer(false);
          setWrongAnswer(true);
          setWrongCount(wrongCount+1);
          if(currentIndex < questionAnswers.length - 1)
            setCurrentIndex(currentIndex+1);
        }}
      />}
      {correctAnswer && <span style={{ fontSize: '100px' }}>&#128525;</span>}
      {wrongAnswer && <span style={{ fontSize: '100px' }}>&#129397;</span>}
      <hr />
      <div><span style={{ fontSize: '24px' }}>Correct Answers: {correctCount}</span></div>
      <div><span style={{ fontSize: '24px' }}>Wrong Answers: {wrongCount}</span></div>
    </div>
  )
}

export default App;