import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementBreak, decrementBreak } from '../actions';

const BreakControls = () => {
  const dispatch = useDispatch();
  const breakLength = useSelector(state => state.breakLength);

  return (
    <div className="flex items-center space-x-4">
      <button
        id="break-decrement"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(decrementBreak())}
      >
        -
      </button>
      <span id="break-length" className="text-xl">{breakLength}</span>
      <button
        id="break-increment"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => dispatch(incrementBreak())}
      >
        +
      </button>
    </div>
  );
};

export default BreakControls;
