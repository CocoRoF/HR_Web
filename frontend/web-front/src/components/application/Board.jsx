import React from 'react';
import App from "@/components/common/App";

const Board = () => {
  return (
    <board id="board" role="boarding">
      <div className='board__inner'>
        <App />
      </div>
    </board>
  );
};

export default Board;