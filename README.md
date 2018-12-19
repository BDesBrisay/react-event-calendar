# React Event Calendar and Date Picker

A React calendar component used for picking a date and displaying events on days. It is extremely simple, yet has extensive customizability to fit your needs. 

## Getting Started

To install this package into your project run `npm install --save react-event-calendar`

## Usage

A simple calendar component will use the following code

```
import React from 'react';
import Calendar from 'react-event-calendar';

const App = () => (
  <div>
    <Calendar />
  </div>
);

export default App;
```

For more customization use the props

```
import React from 'react';
import Calendar from '../lib';

const App = () => (
  <div>
    <Calendar 
      /*onChange={(val) => {console.log(val)}}
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
      }}*/
    />
  </div>
);

export default App;
```

## Demo app

Is located inside `src/demo` directory, here you can test your library while developing

To get a demo running locally, in the root directory of the project run `npm start`

## Testing

`npm run test` or `yarn run test`

## Build library

`npm run build` or `yarn run build`

Produces production version of library under the `build` folder.

## Publish library

`npm publish`
