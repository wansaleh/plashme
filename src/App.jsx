import { format } from 'date-fns';
import React, { useState } from 'react';
import { useInterval } from 'react-use';

export default function App() {
  const [date, setDate] = useState(new Date());

  useInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <div className="absolute inset-0 flex items-center justify-center leading-none text-white">
      <div style={{ textShadow: '0 0 40px rgba(0,0,0,0.5)' }}>
        <div className="text-[12vw] font-bold">{format(date, 'hh:mm a')}</div>
        <div className="mr-4 -mt-0 text-[3vw] text-right">
          {format(date, 'EEEE, LLLL d')}
        </div>
      </div>
    </div>
  );
}
