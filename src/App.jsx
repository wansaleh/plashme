import { format } from 'date-fns';
import React, { useState } from 'react';
import { useInterval } from 'react-use';

function App() {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="absolute inset-0">
      <div
        className="text-[80px] font-bold absolute bottom-0 left-0 m-16 leading-none text-white"
        style={{ textShadow: '0 0 10px rgba(0,0,0,0.35)' }}
      >
        {format(date, 'hh:mm:ss a')}
      </div>
    </div>
  );
}

export default App;
