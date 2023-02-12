import { Form, Button } from 'react-bootstrap';
import styles from './selectionPage.module.css';
import { useState } from 'react';
const classNames = require('classnames');

const SelectionPage = ({ items, onClick, startExam }) => {
  const [dictation, setDictation] = useState('Выберите диктант');

  const handleChange = (e) => {
    let item = e.target.value;
    onClick(item);
    setDictation(item)
  };

  const start = (e) => {
    e.preventDefault();
    startExam();
  };

  const validSetter = dictation === 'Выберите диктант' ? true : false;

  const arrayOfDictations = items.map((item, index) => {
    return (
      <option value={index} key={item.name}>
        {item.name}
      </option>
    );
  });

  return (
    <section className={styles.main}>
      <h1>Интерактивный диктант</h1>
      <div className={styles.selectWrapper}>
        <Form.Select
          className={classNames(styles.selector)}
          aria-label='Default select example'
          onChange={handleChange}
        >
          <option>Выберите диктант</option>
          {arrayOfDictations}
        </Form.Select>
        <Button variant='primary' disabled={validSetter} onClick={start}>
          Начать диктант
        </Button>
      </div>
    </section>
  );
};

export default SelectionPage;
