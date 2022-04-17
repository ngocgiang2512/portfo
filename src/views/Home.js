import {useState, useRef} from 'react';

const Home = () => {
  const [time, setTime] = useState(0);
  const timer = useRef(null);
  const startStopTimer = () => {
    if (!timer.current) {
      timer.current = setInterval(() => setTime(currentTime => currentTime + 1), 1000);
    } else {
      clearInterval(timer.current);
      timer.current = null;
    }
  };

  return (
    <div>
      <p>Time: {time} seconds</p>
      <button
        onClick={startStopTimer}
      >
        Start/Stop
      </button>
    </div>
  );
};

export default Home;