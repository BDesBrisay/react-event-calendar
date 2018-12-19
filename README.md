# React Date Picker Calendar

A React calendar component used for picking a date and displaying events on days. It is extremely simple, yet has extensive customizability to fit your needs. 

## Getting Started

To install this package into your project run `npm install --save react-date-picker-calendar`

## Usage

A simple calendar component will use the following code

```
import React from 'react';
import Calendar from 'react-date-picker-calendar';

const App = () => (
  <div>
    <Calendar />
  </div>
);

export default App;
```
<img src="https://github.com/BDesBrisay/react-event-calendar/blob/master/normalCal.png" width="300" />

For more customization use the props

```
import React from 'react';
import Calendar from 'react-date-picker-calendar';

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
        body: { background: 'lightyellow' },
        numberRow: { padding: '0 20px', boxSizing: 'border-box' },
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
```

<img src="https://github.com/BDesBrisay/react-event-calendar/blob/master/wackyCal.png" width="300" />

## Documentation

| Prop Name | Type | Defualt | Description |
|-----------|------|---------|-------------|
| `onChange` | `Function` | `(val) => {}` | Pass your own function that recieves the new value as a prop |
| `selectedDate` | `Date` | `new Date()` | The starting date of the calendar view, defaults to today |
| `selectedMonth` | `Date` | `new Date()` | The starting month of the calendar view, defaults to today |
| `eventDates` | `Array`| `[]` | An array of event dates to render on calendar as events |
| `minDate` | `Date` | `undefined` | A minimum date for date selection purposes |
| `maxDate` | `Date` | `undefined` | A maximum date for date selection purposes |
| `customStyles` | `Object` | <pre>{<br/>&nbsp;header: {},<br/>&nbsp;title: {},<br/>&nbsp;prev: {},<br/>&nbsp;next: {},<br/>&nbsp;days: {},<br/>&nbsp;daysRow: {},<br/>&nbsp;body: {},<br/>&nbsp;numberRow: {},<br/>&nbsp;cell: {},<br/>&nbsp;innerCell: {},<br/>&nbsp;number: {},<br/>&nbsp;selected: {},<br/>&nbsp;event: {},<br/>&nbsp;disabled: {},<br/>&nbsp;outOfRange: {}<br/>}</pre> | A custom style object for every single element in the calendar

## Demo app

Is located inside `src/demo` directory, here you can test your library while developing

To get a demo running locally, in the root directory of the project run `npm start`

