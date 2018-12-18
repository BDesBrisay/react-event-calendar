import React from 'react';
import dateFns from 'date-fns';

import './Calendar.css';

const isInArray = (array, date) => (
  !!array.find((item) => item.getTime() === date.getTime())
);

class Calendar extends React.Component {
  state = {
    selectedMonth: this.props.selectedMonth ? this.props.selectedMonth : new Date(),
    selectedDate: this.props.selectedDate ? this.props.selectedDate : new Date(),
    eventDates: this.props.eventDates ? this.props.eventDates : []
  };

  renderHeader() {
    const dateFormat = "MMMM YYYY";

    return (
      <div className="header row flex-middle">
        <div className="col col-start" onClick={this.prevMonth}>
          <div className="icon">chevron_left</div>
        </div>
        <div className="col col-center">
          <span>{dateFns.format(this.state.selectedMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={this.nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
  }

  renderDays() {
    const dateFormat = "ddd";
    const days = [];

    let startDate = dateFns.startOfWeek(this.state.selectedMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="days row">{days}</div>;
  }

  renderCells() {
    const { selectedMonth, selectedDate, eventDates } = this.state;
    const { minDate, maxDate } = this.props;
    const monthStart = dateFns.startOfMonth(selectedMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    const dateFormat = "D";
    const rows = [];

    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = dateFns.format(day, dateFormat);
        const cloneDay = day;

        days.push(
          <div
            className={`col cell${
              !dateFns.isSameMonth(day, monthStart) ? ' disabled' : ''
            }${
              (dateFns.isBefore(day, minDate) || dateFns.isAfter(day, maxDate)) ? ' disabled outside' : ''
            }`}
            key={day}
            onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
          >
            <div 
              className={`innerCell${
                isInArray(eventDates, day) ? ' event' : ''
              }${
                dateFns.isSameDay(day, selectedDate) ? ' selected' : ''
              }`}
            >
              <span className="number">{formattedDate}</span>
            </div>
          </div>
        );
        day = dateFns.addDays(day, 1);
      }

      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );

      days = [];
    }
    return <div className="body">{rows}</div>;
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
    return (
      <div className="calendar">
        {this.renderHeader()}
        {this.renderDays()}
        {this.renderCells()}
      </div>
    );
  }
}

export default Calendar;