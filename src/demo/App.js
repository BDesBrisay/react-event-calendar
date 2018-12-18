import React from 'react';
import Calendar from '../lib';

const App = () => (
  <div>
    <Calendar 
      onChange={(val) => {console.log(val)}}
      selectedDate={new Date('Dec 18 2018')}
      selectedMonth={new Date('Dec 18 2018')}
      eventDates={[
        new Date('Dec 13 2018'),
        new Date('Dec 21 2018'),
        new Date('Dec 24 2018')
      ]}
      minDate={new Date('Dec 10 2018')}
      maxDate={new Date('Jan 3 2019')}
      customStyles={{
        header: { paddingBottom: 10 },
        title: { textTransform: 'uppercase' },
        prev: { paddingLeft: 30, color: 'blue' },
        next: { paddingRight: 30, color: 'lightblue' },
        daysRow: { background: '#bbb' },
        days: { color: 'white' },
        cell: { paddingTop: 10 },
        innerCell: { borderRadius: 5 },
        number: { fontSize: 16 },
        selected: { background: 'purple' },
        event: { background: 'teal', color: 'white' },
        extra: { color: 'green' },
        outOfRange: { color: 'red', fontWeight: '400' }
      }}
    />
  </div>
);

export default App;
