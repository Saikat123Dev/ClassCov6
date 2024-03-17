
import { useState } from 'react';
import Calendar from 'react-calendar';


function CalendarApp() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
     
      <div className='calendar-container w-[450px] p-4 bg-slate-600 flex rounded-3xl'>
        <Calendar onChange={setDate} value={date} />
        <p className='text-center'>
        <span className='bold'></span>{' '}
        {date.toDateString()}
      </p>
      </div>
      
    </div>
  );
}

export default CalendarApp;