import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementSession, decrementSession } from '../actions';

const SessionControls = () => {
  const dispatch = useDispatch();
  const sessionLength = useSelector(state => state.sessionLength);

  return (
    <div className="flex items-center space-x-4">
      <button
        id="session-decrement"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(decrementSession())}
      >
        -
      </button>
      <span id="session-length" className="text-xl">{sessionLength}</span>
      <button
        id="session-increment"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(incrementSession())}
      >
        +
      </button>
    </div>
  );
};

export default SessionControls;
