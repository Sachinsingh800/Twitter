import React, { useState } from 'react';
import style from './Month.module.css'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function MonthDropdown() {
  const [selectedMonth, setSelectedMonth] = useState('');

  return (
    <div>
      <select className={style.select} value={selectedMonth} onChange={e => setSelectedMonth(e.target.value)}>
        <option value="" disabled>Month</option>
        {months.map(month => <option  key={month} value={month}>{month}</option>)}
      </select>
      {/* {selectedMonth && <p>Selected month: {selectedMonth}</p>} */}
    </div>
  );
}

export default MonthDropdown;