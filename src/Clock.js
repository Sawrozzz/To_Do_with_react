import React from 'react';

function DateComponent() {
  const currentDate = new Date();

  // Get the day of the week as a string
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

  // Get the formatted date
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  return (
    <div>
      <p>{`${formattedDate}`}</p>
      <p>{`${currentDayOfWeek} `}</p>
    </div>
  );
}

export default DateComponent;
