import React, { useEffect, useState } from "react";
import QuestionAnswer from "./questionAnswer/QuestionAnswer";
import generateQuestionAnswers from "./language/questionsGenerator";

const App = () => {
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  useEffect(() => {
    setQuestionAnswers(generateQuestionAnswers(20))
  }, [])
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Welcome to Hindi test</h1>
      <hr />
      {questionAnswers.length && currentIndex < questionAnswers.length && <QuestionAnswer
        questionAnswer={questionAnswers[currentIndex]}
        questionIndex={currentIndex+1}
        onCorrectAnswerClick={() => {
          setCorrectCount(correctCount+1);
          if(currentIndex < questionAnswers.length){
            setCurrentIndex(currentIndex+1);
          }
        }}
        onWrongAnswerClick={() => {
          setWrongCount(wrongCount+1);
          if(currentIndex < questionAnswers.length){
            setCurrentIndex(currentIndex+1);
          }
        }}
      />}
      <hr />
      {currentIndex === questionAnswers.length && <h2>Your final score</h2>}
      <div>Correct Answers: {correctCount} {Array.from(Array(correctCount)).map((_, index)=> <span key={index} style={{ fontSize: '32px' }}>&#128525;</span>)}</div>
      <div>Wrong Answers: {wrongCount} {Array.from(Array(wrongCount)).map((_, index)=> <span key={index} style={{ fontSize: '32px' }}>&#129397;</span>)}</div>
    </div>
  )
}

export default App;