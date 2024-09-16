// Action Types
export const INCREMENT_BREAK = 'INCREMENT_BREAK';
export const DECREMENT_BREAK = 'DECREMENT_BREAK';
export const INCREMENT_SESSION = 'INCREMENT_SESSION';
export const DECREMENT_SESSION = 'DECREMENT_SESSION';
export const START_TIMER = 'START_TIMER';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_TIMER = 'RESET_TIMER';

// Action Creators
export const incrementBreak = () => ({
  type: INCREMENT_BREAK
});

export const decrementBreak = () => ({
  type: DECREMENT_BREAK
});

export const incrementSession = () => ({
  type: INCREMENT_SESSION
});

export const decrementSession = () => ({
  type: DECREMENT_SESSION
});

export const startTimer = () => ({
  type: START_TIMER
});

export const stopTimer = () => ({
  type: STOP_TIMER
});

export const resetTimer = () => ({
  type: RESET_TIMER
});
