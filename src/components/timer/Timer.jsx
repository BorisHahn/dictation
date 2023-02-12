import { useState, useEffect, useRef, useCallback } from 'react';

const Timer = ({ time, handleEnd, enabled }) => {
  let finish = time;
  const [elapsed, setElapsed] = useState(0);
  const timeoutId = useRef(null);
  const timer = new Date(finish - elapsed);

  const stopTimer = () => {
    clearTimeout(timeoutId);
    setElapsed(finish);
    if (typeof handleEnd === 'function') handleEnd();
  };

  const tickTimer = () => {
    let lastTime = Date.now();
    timeoutId.current = setTimeout(() => {
      setElapsed(elapsed + Date.now() - lastTime);
    }, 50);
  };

  useEffect(() => {
    if (enabled) {
      if (elapsed >= finish) {
        stopTimer();
      } else {
        tickTimer();
      }
    }
    return () => clearTimeout(timeoutId);
  }, [elapsed]);

  return (
    <div>
      <div>
        {timer.getMinutes().toString().padStart(2, '0')}:
        {timer.getSeconds().toString().padStart(2, '0')}
      </div>
    </div>
  );
};

export default Timer;
