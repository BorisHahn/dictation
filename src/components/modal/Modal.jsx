import styles from './Modal.module.css';
import { NavLink } from 'react-router-dom';

const Modal = ({
  isOpen,
  handleCloseModal,
  correctAnswer,
  incorrectAnswer,
}) => {
  return (
    <div className={isOpen ? styles.modal_open : styles.modal}>
      <h2 className={styles.title}>Диктант завершён</h2>

      <p className={styles.result}>Результат:</p>
      <ul className={styles.list}>
        <li className={styles.item}>
          Верные ответы: <p className={styles.correct}>{correctAnswer}</p>
        </li>
        <li className={styles.item}>
          Неверные ответы:
          <p className={styles.incorrect}>{incorrectAnswer}</p>
        </li>
      </ul>
      <NavLink className={styles.back} to={'/'} onClick={handleCloseModal}>
        &#10229; Вернуться к выбору диктанта
      </NavLink>
    </div>
  );
};

export default Modal;
