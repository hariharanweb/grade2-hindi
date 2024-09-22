import React, { useState } from "react";
import QuestionAnswer from "./questionAnswer/QuestionAnswer";

const App = () => {
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);
  return (
    <>
      <h1>Welcome to AS Hindi test</h1>
      <QuestionAnswer 
        question={'Who is primeminister of India?'} 
        answers={['Modi', 'Vijay', 'Siddharamaih', 'Karan']}
        correctAnswer={'Modi'}
        onCorrectAnswerClick={() => {
          setCorrectAnswer(true);
          setWrongAnswer(false);
        }}
        onWrongAnswerClick={() => {
          setCorrectAnswer(false);
          setWrongAnswer(true)
        }}
      />
      {correctAnswer && <span style={{fontSize:'100px'}}>&#128525;</span>}
      {wrongAnswer && <span style={{fontSize:'100px'}}>&#129397;</span>}
    </>
  )
}

export default App;