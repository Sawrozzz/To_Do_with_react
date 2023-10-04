import React from 'react';

function DateComponent() {
  const currentDate = new Date();
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div className='Alldate'>
      <p className='date'>{`${formattedDate}`}</p>
      <p className='day'>{`${currentDayOfWeek} `}</p>       
    </div>
  );
}

export default DateComponent;
