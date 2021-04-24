import { format } from 'date-fns';
import React, { useState } from 'react';
import { useInterval } from 'react-use';

function App() {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="absolute inset-0 flex items-center justify-center leading-none text-white">
      <div style={{ textShadow: '0 0 10px rgba(0,0,0,0.35)' }}>
        <div className="text-[200px] font-medium tracking-wider">
          {format(date, 'hh:mm a')}
        </div>
        <div className="mr-4 -mt-4 text-6xl text-right">
          {format(date, 'EEEE, LLLL d')}
        </div>
      </div>
    </div>
  );
}

export default App;
