import { format } from 'date-fns';
import React, { useState } from 'react';
import { useInterval } from 'react-use';

function App() {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="text-[200px] font-thin tracking-widest m-16 leading-none text-white"
        style={{ textShadow: '0 0 10px rgba(0,0,0,0.35)' }}
      >
        {format(date, 'hh:mm a')}
      </div>
    </div>
  );
}

export default App;
