import React from 'react';
const QuestionAnswer = ({ questionAnswer, questionIndex, onCorrectAnswerClick, onWrongAnswerClick }) => {
  return (
    <div style={{fontSize: 'x-large'}}>
      <h4 style={{color: 'slategrey'}}>{questionIndex}. {questionAnswer.question}</h4>
      {
        questionAnswer.answers.map((answer, index) => {
          return (
            <div key={answer} style={{backgroundColor: 'lightgrey', paddingBottom: '1px', paddingTop: '1px', marginBottom: '8px'}} 
              onClick={() => {
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