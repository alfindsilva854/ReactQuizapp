import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const QuizApp = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [questions, setQuestions] = useState([
    {
      question: '1.Which component of the MEAN Stack is responsible for handling server-side logic and routing?',
      options: ['Angular', 'MongoDB', 'Express.js', 'Node.js'],
      correctAnswer: 'Express.js',
    },
    {
      question: '2.Which of the following is a client-side JavaScript framework in the MEAN Stack?',
      options: ['React', 'Vue.js', 'Angular', 'Ember.js'],
      correctAnswer: ' Angular',
    },
    {
      question: '3.What does MongoDB store data in?',
      options: ['Tables','Collections','Documents','Rows'],
      correctAnswer: 'Documents',
    },
    {
      question: '4.In a MEAN Stack application, which component is responsible for handling asynchronous operations and managing the event loop?',
      options: ['Angular', 'MongoDB', 'Express.js', 'Node.js'],
      correctAnswer: 'Node.js',
    },
    {
      question: '5.Which npm package is commonly used to create and manage an Express.js application?',
      options: ['express-generator', 'npm-express', 'node-expressify', 'express-app-maker'],
      correctAnswer: 'express-generator',
    },
  ]);

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(''));
  const [score, setScore] = useState(null);

  const handleOptionSelect = (questionIndex, selectedOption) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const handleSubmitQuiz = () => {
    const newScore = userAnswers.reduce((acc, answer, index) => {
      return answer === questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    setScore(newScore);
  };

  return (
    <div id='color' style={{border:'1px black solid'}} className='text-center p-5 m-5 fs-3'>
      <h1 className='p-5'>Quiz App</h1>
      <hr />
      {questions.map((question, index) => (
        <div key={index}>
          <p id='fonts'><b>{question.question}</b></p>
          <ul>
            {question.options.map((option, optionIndex) => (
              <ul className='text-center' key={optionIndex}>
                <label className='p-3'>
                  <input 
                    type="radio"
                    name={`question${index}`}
                    value={option}
                    checked={userAnswers[index] === option}
                    onChange={() => handleOptionSelect(index, option)}
                  />
                {option}
                </label>
              </ul>
            ))}
          </ul>
        </div>
      ))}
   <a onClick={handleShow}><button className='btn btn-outline-dark' onClick={handleSubmitQuiz}>Submit Quiz</button></a>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your Score</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {score !== null && <p>Your Score: {score} out of {questions.length}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
     
    </div>
  );
};

export default QuizApp;
