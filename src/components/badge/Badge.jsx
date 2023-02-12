import styles from './Badge.module.css';
import { useState } from 'react';
const Badge = ({ answers, text, selectAnswer }) => {
  const [show, setShow] = useState(false);
  const drawSelector = () => {
    return (
      <span className={styles.badgeSelector}>
        {answers.map((e, i) => (
          <label
            key={i}
            className={styles.label}
            onClick={() => selectAnswer(i)}
          >
            {e}
          </label>
        ))}
      </span>
    );
  };
  return (
    <span className={styles.badge} onClick={() => setShow(!show)}>
      {text || '_'}
      {show && drawSelector()}
    </span>
  );
};

export default Badge;
