import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import Score from './components/Score';
import './App.css';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Paris', 'London', 'Berlin', 'Madrid'],
    answer: 'Paris',
  },
  {
    question: 'Who is CEO of Tesla?',
    options: ['Jeff Bezos', 'Elon Musk', 'Bill Gates', 'Tony Stark'],
    answer: 'Elon Musk',
  },
  // Add more questions as needed
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    answer: "Mars"
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    answer: "Pacific Ocean"
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ["William Shakespeare", "Charles Dickens", "J.K. Rowling", "Mark Twain"],
    answer: "William Shakespeare"
  },
  {
    question: "What is the boiling point of water?",
    options: ["90°C", "100°C", "110°C", "120°C"],
    answer: "100°C"
  },
  {
    question: "What is the smallest prime number?",
    options: ["1", "2", "3", "5"],
    answer: "2"
  },
  {
    question: "Which gas is most abundant in the Earth's atmosphere?",
    options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
    answer: "Nitrogen"
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [solvedQuestions, setSolvedQuestions] = useState(0);
  const [attemptedQuestions, setAttemptedQuestions] = useState([]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (!attemptedQuestions.includes(currentQuestion)) {
      setAttemptedQuestions([...attemptedQuestions, currentQuestion]);
      setSolvedQuestions(solvedQuestions + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="app">
      {showScore ? (
        <Score score={score} totalQuestions={questions.length} />
      ) : (
        <>
          <div className="question-section">
            <QuestionCard
              question={questions[currentQuestion]}
              currentQuestion={currentQuestion}
              totalQuestions={questions.length}
              handleAnswerOptionClick={handleAnswerOptionClick}
            />
            <div className="navigation-buttons">
              <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                Previous
              </button>
              <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
                Next
              </button>
            </div>
          </div>
          <div className="status-section">
            <p>Total Questions: {questions.length}</p>
            <p>Solved Questions: {solvedQuestions}</p>
            <p>Attempted Questions: {attemptedQuestions.length}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default App;

