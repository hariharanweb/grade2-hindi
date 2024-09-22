import React from 'react';
const QuestionAnswer = ({ question, answers, correctAnswer, onCorrectAnswerClick, onWrongAnswerClick }) => {
  return (
    <>
      <h3>{question}</h3>
      {
        answers.map((answer, index) => {
          return (
            <div key={answer} onClick={() => {
              if (answer === correctAnswer)
                onCorrectAnswerClick()
              else
                onWrongAnswerClick()
            }}>
              <h4>{index + 1}. {answer}</h4>
            </div>
          )
        })
      }
    </>
  )
}

export default QuestionAnswer;