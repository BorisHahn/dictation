import styles from './DictationPage.module.css';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Timer from '../timer/Timer';
import Modal from '../modal/Modal';
import Badge from '../badge/Badge';

const DictationPage = ({
  dictation,
  finishExam,
  handleCloseModal,
  isOpenModal,
  enable,
}) => {
  const [answersArray, setAnswersArray] = useState([]);
  const [dictationText, setDictationText] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [incorrectAnswer, setIncorrectAnswer] = useState(0);

  useEffect(() => {
    setDictationText(dictation.text);
  }, []);

  const checkResults = (object) => {
    let corAnswer = 0;
    let incocrAnswer = 0;
    answersArray.forEach((item, index) => {
      if (item === object[index].validAnswer) {
        corAnswer += 1;
        setCorrectAnswer(corAnswer);
      } else {
        incocrAnswer += 1;
        setIncorrectAnswer(incocrAnswer);
      }
    });
  };

  const initQuestion = (index) => {
    // индекс ответа по индексу инициализируемого вопроса
    const answerIndex = answersArray[index];
    // ответы
    const answers = dictation.questions[index].answers;
    // текст выбранного ответа
    const answer = answerIndex != null ? answers[answerIndex] : null;
    // функция выбора
    const selectAnswer = (answer) => {
      const resetAnswers = [...answersArray];
      resetAnswers[index] = answer;
      setAnswersArray(resetAnswers);
    };
    return (
      <Badge
        key={index}
        answers={answers}
        text={answer}
        selectAnswer={selectAnswer}
      />
    );
  };

  const anchors = [...dictationText.matchAll(/\{(\d+)\}/g)];
  const separated = dictationText.split(/\{\d+}/);

  const openModal = (e) => {
    e.preventDefault();
    finishExam();
    checkResults(dictation.questions);
  };

  const outputText = separated.map((s, i, all) => {
    if (all.length - 1 === i) return [s];
    else return [s, initQuestion(anchors[i][1])];
  });

  return (
    <section className={styles.wrapper}>
      <div className={styles.page}>
        <header className={styles.header}>
          <h1>Название диктанта: {dictation.name}</h1>
          <Timer handleEnd={finishExam} enabled={enable} time={300000} />
        </header>
        <main className={styles.main}>
          <p>Текст диктанта</p>
          <div className={styles.textContainer}>
            <p>{outputText}</p>
          </div>
          <Button variant='success' onClick={openModal} disabled={isOpenModal}>
            Завершить диктант
          </Button>
          <Modal
            isOpen={isOpenModal}
            handleCloseModal={handleCloseModal}
            correctAnswer={correctAnswer}
            incorrectAnswer={incorrectAnswer}
          />
        </main>
      </div>
    </section>
  );
};

export default DictationPage;
