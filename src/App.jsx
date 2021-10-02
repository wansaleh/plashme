import { format } from 'date-fns';
import React, { useState } from 'react';
import { useInterval } from 'react-use';

export default function App() {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="flex absolute inset-0 justify-center items-center leading-none text-white">
      <div style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}>
        <div className="text-[16vw] font-bold tracking-tighter">
          {format(date, 'hh:mm a')}
        </div>
        <div
          className="mr-4 -mt-0 text-[4vw] text-right"
          style={{
            textShadow: '0 0 20px rgba(0,0,0,0.5), 0 0 2px rgba(0,0,0,0.2)'
          }}
        >
          {format(date, 'EEEE, LLLL d')}
        </div>
      </div>
    </div>
  );
}
