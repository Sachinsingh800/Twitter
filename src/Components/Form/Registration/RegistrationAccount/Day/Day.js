import React, { useState } from 'react';
import style from './Day.module.css'

const Days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

function DayDropdown() {
  const [selectedDay, setSelectedDay] = useState('');
  
  return (
    <div>
      <select className={style.select} value={selectedDay} onChange={e => setSelectedDay(e.target.value)}>
        <option  value="" disabled>Day</option>
        {Days.map(Day => <option  key={Day} value={Day}>{Day}</option>)}
      </select>
      {/* {selectedDay && <p>Selected Day: {selectedDay}</p>} */}

    </div>
  );
}

export default DayDropdown;