import React from 'react';
import dateFns from 'date-fns';

import './Calendar.css';

const isInArray = (array, date) => (
  !!array.find((item) => item.getTime() === date.getTime())
);

class Calendar extends React.Component {
  state = {
    selectedMonth: this.props.selectedMonth,
    selectedDate: this.props.selectedDate,
    eventDates: this.props.eventDates
  };

  renderHeader() {
    const label = dateFns.format(this.state.selectedMonth, 'MMMM YYYY')
    const { customStyles } = this.props;

    return (
      <div className="header row" style={customStyles.header}>
        <div 
          className="col col-start"
          style={customStyles.prev} 
          onClick={this.prevMonth}
        >
          <div className="icon">chevron_left</div>
        </div>
        <div className="col col-center" style={customStyles.title}>
          <span>{label}</span>
        </div>
        <div 
          className="col col-end"
          style={customStyles.next}
          onClick={this.nextMonth}
        >
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const { customStyles } = this.props;
    const startDate = dateFns.startOfWeek(this.state.selectedMonth);
    const days = [];

    for (let i = 0; i < 7; i++) {
      const label = dateFns.format(dateFns.addDays(startDate, i), 'ddd');

      days.push(
        <div 
          key={i}
          className="col col-center"
          style={customStyles.days}
        >
          {label}
        </div>
      );
    }

    return <div className="days row" style={customStyles.daysRow}>{days}</div>;
  }

  renderCells() {
    const { selectedMonth, selectedDate, eventDates } = this.state;
    const { minDate, maxDate, customStyles } = this.props;
    const monthStart = dateFns.startOfMonth(selectedMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);
    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const formattedDate = dateFns.format(day, 'D');
        const cloneDay = day;

        let outerClass = 'col cell';
        let outerStyle = customStyles.cell;
        if (!dateFns.isSameMonth(day, monthStart)) {
          outerClass += ' disabled';
          outerStyle = {...outerStyle, ...customStyles.extra};
        }
        if (dateFns.isBefore(day, minDate) || dateFns.isAfter(day, maxDate)) {
          outerClass += ' disabled outside';
          outerStyle = {...outerStyle, ...customStyles.extra, ...customStyles.outOfRange };
        }

        let innerClass = 'innerCell';
        let innerStyle = customStyles.innerCell;
        if (isInArray(eventDates, day)) {
          innerClass += ' event';
          innerStyle = {...innerStyle, ...customStyles.event};
        }
        if (dateFns.isSameDay(day, selectedDate)) {
          innerClass += ' selected';
          innerStyle = {...innerStyle, ...customStyles.selected};
        }

        days.push(
          <div
            key={day}
            className={outerClass}
            style={outerStyle}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <div className={innerClass} style={innerStyle}>
              <span className="number" style={customStyles.number}>{formattedDate}</span>
            </div>
          </div>
        );

        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <div 
          key={day}
          className="row"
          style={customStyles.numberRow}
        >
          {days}
        </div>
      );

      days = [];
    }
    return <div className="body" style={customStyles.body}>{rows}</div>;
  }

  onDateClick = day => {
    this.setState({ selectedDate: day });
    if (this.props.onChange) this.props.onChange(day);
  };

  nextMonth = () => {
    this.setState({ selectedMonth: dateFns.addMonths(this.state.selectedMonth, 1) });
  };

  prevMonth = () => {
    this.setState({ selectedMonth: dateFns.subMonths(this.state.selectedMonth, 1) });
  };

  render() {
    const { customStyles } = this.props;
    return (
      <div className="calendar" style={customStyles.calendar}>
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

Calendar.defaultProps = {
  onChange: () => {},
  selectedMonth: new Date(),
  selectedDate: new Date(),
  eventDates: [],
  minDate: undefined,
  maxDate: undefined,
  customStyles: {
    header: {},
    title: {},
    prev: {},
    next: {},
    days: {},
    daysRow: {},
    body: {},
    numberRow: {},
    cell: {},
    innerCell: {},
    number: {},
    selected: {},
    event: {},
    disabled: {},
    outOfRange: {}
  }
}

export default Calendar;