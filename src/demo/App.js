import React from 'react';
import Calendar from '../lib';

const App = () => (
  <div>
    <Calendar 
      onChange={(val) => {console.log(val)}}
      selectedDate={new Date('Jan 18 2018')}
      selectedMonth={new Date('Jan 18 2018')}
      minDate={new Date('Jan 17 2018')}
      maxDate={new Date('Jan 20 2018')}
    />
  </div>
);

export default App;
