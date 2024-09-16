// Import action types
import {
  INCREMENT_BREAK,
  DECREMENT_BREAK,
  INCREMENT_SESSION,
  DECREMENT_SESSION,
  START_TIMER,
  STOP_TIMER,
  RESET_TIMER
} from './actions';

// Initial State
const initialState = {
  breakLength: 5,
  sessionLength: 25,
  timeLeft: '25:00',
  timerLabel: 'Session',
  isRunning: false,
  timerInterval: null
};

// Helper function to format time
const formatTime = (minutes, seconds) => {
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_BREAK:
      return {
        ...state,
        breakLength: Math.min(state.breakLength + 1, 60),
        timeLeft: state.timerLabel === 'Break' ? formatTime(Math.min(state.breakLength + 1, 60), 0) : state.timeLeft
      };

    case DECREMENT_BREAK:
      return {
        ...state,
        breakLength: Math.max(state.breakLength - 1, 1),
        timeLeft: state.timerLabel === 'Break' ? formatTime(Math.max(state.breakLength - 1, 1), 0) : state.timeLeft
      };

    case INCREMENT_SESSION:
      return {
        ...state,
        sessionLength: Math.min(state.sessionLength + 1, 60),
        timeLeft: state.timerLabel === 'Session' ? formatTime(Math.min(state.sessionLength + 1, 60), 0) : state.timeLeft
      };

    case DECREMENT_SESSION:
      return {
        ...state,
        sessionLength: Math.max(state.sessionLength - 1, 1),
        timeLeft: state.timerLabel === 'Session' ? formatTime(Math.max(state.sessionLength - 1, 1), 0) : state.timeLeft
      };

    case START_TIMER:
      if (state.isRunning) return state;

      const [minutes, seconds] = state.timeLeft.split(':').map(Number);

      const interval = setInterval(() => {
        let newMinutes = minutes;
        let newSeconds = seconds - 1;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }

        if (newMinutes < 0) {
          clearInterval(interval);
          const newLabel = state.timerLabel === 'Session' ? 'Break' : 'Session';
          const newTimeLeft = state.timerLabel === 'Session' ? formatTime(state.breakLength, 0) : formatTime(state.sessionLength, 0);
          const audio = document.getElementById('beep');
          audio.play();
          return {
            ...state,
            timerLabel: newLabel,
            timeLeft: newTimeLeft,
            isRunning: false,
            timerInterval: null
          };
        }

        return {
          ...state,
          timeLeft: formatTime(newMinutes, newSeconds)
        };
      }, 1000);

      return {
        ...state,
        isRunning: true,
        timerInterval: interval
      };

    case STOP_TIMER:
      clearInterval(state.timerInterval);
      return {
        ...state,
        isRunning: false,
        timerInterval: null
      };

    case RESET_TIMER:
      clearInterval(state.timerInterval);
      return {
        ...state,
        breakLength: 5,
        sessionLength: 25,
        timeLeft: formatTime(25, 0),
        timerLabel: 'Session',
        isRunning: false,
        timerInterval: null
      };

    default:
      return state;
  }
};

export default reducer;
