import React from 'react';
const QuestionAnswer = ({ questionAnswer, questionIndex, onCorrectAnswerClick, onWrongAnswerClick }) => {
  return (
    <div style={{fontSize: 'x-large'}}>
      <h4>{questionIndex}. {questionAnswer.question}</h4>
      {
        questionAnswer.answers.map((answer, index) => {
          return (
            <div key={answer} onClick={() => {
              if (answer === questionAnswer.correctAnswer)
                onCorrectAnswerClick()
              else
                onWrongAnswerClick()
            }}>
              <h3>{index + 1}. {answer}</h3>
            </div>
          )
        })
      }
    </div>
  )
}

export default QuestionAnswer;