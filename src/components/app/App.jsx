import styles from './App.module.css';
import { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ProtectedRoute from '../protectedRoute/ProtectedRoute';
import SelectionPage from '../selectionPage/SelectionPage';
import DictationPage from '../dictationPage/DictationPage';
import dictations from '../../dist/store';

function App() {
  const [isExamStart, setIsExamStart] = useState(false);
  const [dictationList, setDictationList] = useState([]);
  const [currentDictation, setCurrentDictation] = useState({});
  const [resultModal, setResultModal] = useState(false);
  const [enable, setEnable] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    setDictationList(dictations);
  }, []);

  const handleSelect = (index) => {
    setCurrentDictation(dictations[index]);
  };

  const startExam = () => {
    setIsExamStart(true);
    navigate('/dictation');
    setEnable(true);
  };

  const finishExam = () => {
    setResultModal(true);
    setEnable(false);
  };

  const handleCloseModal = () => {
    setResultModal(false);
  };

  return (
    <div className={styles.page}>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <SelectionPage
              items={dictationList}
              onClick={handleSelect}
              startExam={startExam}
            />
          }
        />
        <Route
          element={<ProtectedRoute isExamStart={isExamStart} navigateTo='/' />}
        >
          <Route
            path='/dictation'
            element={
              <DictationPage
                dictation={currentDictation}
                finishExam={finishExam}
                isOpenModal={resultModal}
                handleCloseModal={handleCloseModal}
                enable={enable}
              />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
