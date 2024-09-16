import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startTimer, stopTimer, resetTimer } from '../actions';

const Timer = () => {
  const dispatch = useDispatch();
  const { timeLeft, timerLabel, isRunning } = useSelector(state => state.timer);

  return (
    <div id="timer" className="text-center mt-6">
      <div id="timer-label" className="text-2xl font-bold mb-2">{timerLabel}</div>
      <div id="time-left" className="text-4xl font-mono">{timeLeft}</div>
      <div className="mt-4">
        <button
          id="start_stop"
          className="bg-green-500 text-white px-6 py-3 rounded mr-2"
          onClick={() => dispatch(isRunning ? stopTimer() : startTimer())}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button
          id="reset"
          className="bg-red-500 text-white px-6 py-3 rounded"
          onClick={() => dispatch(resetTimer())}
        >
          Reset
        </button>
      </div>
      <audio id="beep" src="https://www.soundjay.com/button/beep-07.wav"></audio>
    </div>
  );
};

export default Timer;
