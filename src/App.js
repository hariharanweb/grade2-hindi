import React, { useEffect, useState } from "react";
import QuestionAnswer from "./questionAnswer/QuestionAnswer";
import generateQuestionAnswers from "./language/questionsGenerator";

const App = () => {
  const [questionAnswers, setQuestionAnswers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [wrongAnswer, setWrongAnswer] = useState(false);

  useEffect(() => {
    setQuestionAnswers(generateQuestionAnswers(7))
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
          if(currentIndex < questionAnswers.length - 1)
            setCurrentIndex(currentIndex+1);
        }}
        onWrongAnswerClick={() => {
          setCorrectAnswer(false);
          setWrongAnswer(true)
        }}
      />}
      {correctAnswer && <span style={{ fontSize: '100px' }}>&#128525;</span>}
      {wrongAnswer && <span style={{ fontSize: '100px' }}>&#129397;</span>}
    </div>
  )
}

export default App;