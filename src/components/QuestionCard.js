import React from 'react';

function QuestionCard({ question, currentQuestion, totalQuestions, handleAnswerOptionClick }) {
  return (
    <div>
      <div className="question-count">
        <span>Question {currentQuestion + 1}</span>/{totalQuestions}
      </div>
      <div className="question-text">{question.question}</div>
      <div className="answer-section">
        {question.options.map((option, index) => (
          <button key={index} onClick={() => handleAnswerOptionClick(option === question.answer)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
