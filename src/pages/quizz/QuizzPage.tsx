import React, { useState } from "react";
import questionsData from "./questions.json"; // Importa tu JSON aquí
import { HeaderOnlyLogo } from "../../components/header/HeaderOnlyLogo";
import "./quizz.css";
import { FaArrowLeft, FaArrowRight, FaCheck } from "react-icons/fa";
import { MdRefresh } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // Pregunta actual
  const [score, setScore] = useState(0); // Puntaje total
  const [answers, setAnswers] = useState(
    Array(questionsData.length).fill(null)
  ); // Respuestas del usuario
  const [isFinished, setIsFinished] = useState(false); // Para saber si el quiz terminó
  const navigate = useNavigate()
  // Manejador para seleccionar una opción
  const handleAnswer = (optionIndex) => {
    const updatedAnswers = [...answers];
    updatedAnswers[currentQuestion] = optionIndex;
    setAnswers(updatedAnswers);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setAnswers(Array(questionsData.length).fill(null));
    setScore(0);
    setIsFinished(false);
  };

  // Avanzar a la siguiente pregunta
  const handleNext = () => {
    if (currentQuestion < questionsData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateFinalScore();
    }
  };

  // Retroceder a la pregunta anterior
  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  // Calcular el puntaje total al finalizar
  const calculateFinalScore = () => {
    let totalScore = 0;
    answers.forEach((answer, index) => {
      if (answer === questionsData[index].correctAnswer) {
        totalScore += questionsData[index].points;
      }
    });
    setScore(totalScore);
    setIsFinished(true);
  };

  // Mostrar resumen de respuestas correctas e incorrectas
  const renderSummary = () => {
    return (
      <div>
        <HeaderOnlyLogo />
        <h2>Quiz Summary</h2>

        {questionsData.map((question, qIndex) => (
          <div key={qIndex} className="questionSectionSummary">
            <p className="questionDescription">
              {qIndex + 1}. {question.question}
            </p>
            <div className="optionsGroup">
              {question.options.map((option, oIndex) => {
                // Determina la clase basada en la selección del usuario y la respuesta correcta
                let optionClass = "";
                if (
                  answers[qIndex] === oIndex &&
                  oIndex === question.correctAnswer
                ) {
                  optionClass = "correctAnswer selectedAnswer"; // Seleccionada y correcta
                } else if (answers[qIndex] === oIndex) {
                  optionClass = "selectedAnswer"; // Solo seleccionada
                } else if (oIndex === question.correctAnswer) {
                  optionClass = "correctAnswer"; // Solo correcta
                }

                return (
                  <p key={oIndex} className={`optionQuizz ${optionClass}`}>
                    {option} {(answers[qIndex] === oIndex && oIndex !== question.correctAnswer) && "(Selected option)"}{" "}
                    {oIndex === question.correctAnswer && "(Correct Answer)"}
                  </p>
                );
              })}
            </div>
          </div>
        ))}

        <div className="footerScored">
          <p>Total Score: {score}</p>
          <button className="buttonsControlQuestion" onClick={handleRestartQuiz}>Try again <MdRefresh/></button>
        </div>
      </div>
    );
  };

  // Pantalla de preguntas
  const renderQuestion = () => {
    const question = questionsData[currentQuestion];

    return (
      <div>
        <HeaderOnlyLogo />
        <section className="questionSection">
          <h3 className="questionDescription">{question.question}</h3>
          <div className="optionsGroup">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                className={`optionQuizz ${
                  answers[currentQuestion] === index && "optionSelected"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="footerQuizz">
            <button
              onClick={handlePrev}
              disabled={currentQuestion === 0}
              className="buttonsControlQuestion"
            >
              <FaArrowLeft />
              Previous
            </button>
            <p>
              Question <br/> {currentQuestion + 1} of {questionsData.length}
            </p>
            <button onClick={handleNext} className="buttonsControlQuestion">
              {currentQuestion < questionsData.length - 1 ? (
                <>
                  Next <FaArrowRight />
                </>
              ) : (
                <>
                  Finish <FaCheck />
                </>
              )}
            </button>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="quiz-container">
      {!isFinished ? renderQuestion() : renderSummary()}
    </div>
  );
};
