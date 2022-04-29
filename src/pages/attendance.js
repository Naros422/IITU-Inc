import React, { Component } from 'react'
import './attendance.css';
import classnames from 'classnames';
import * as calendar from './calendar';

export default class attendance extends Component {

static defaultProps = {
  date: new Date(),
  years:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022],
  monthNames: ['January', 'February','March','April','May','June','July','August','September','October','November','December'],
  weekDayNames:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  onChange: Function.prototype
};

state={
  date: this.props.date,
  currentDate: new Date(),
  selectedDate: null
};

get year(){
  return this.state.date.getFullYear();
}
get month(){
  return this.state.date.getMonth();
}
get day(){
  return this.state.date.getDate();
}
handlePrevMonthButtonClick = () =>{
const date = new Date(this.year,this.month-1);
this.setState({date});

};
handleNextMonthButtonClick = () =>{
  const date = new Date(this.year,this.month+1);
this.setState({date});
};
handleSelectChange = () =>{

  const year = this.yearSelect.value;
  const month = this.monthSelect.value;
  const date = new Date(year, month);

  this.setState({ date });
};
handleDayClick = date =>{
  this.setState({selectedDate:date});

  this.props.onChange(date);
};

  render() {
    const{years,monthNames,weekDayNames} = this.props;
    const {currentDate, selectedDate} = this.state;

    const monthDate = calendar.getMonthData(this.year,this.month);

    return (
      <div className='calendar'>
        <header>
          <button class="btn btn-primary btn-lg" onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

          <select 
          ref={element => this.monthSelect  =element}
          value={this.month}
          onChange={this.handleSelectChange}>
            {monthNames.map((name,index)=>
            <option key={name} value={index}>{name}</option>
            )}
          </select>
          
          <select 
          ref={element => this.yearSelect  =element}
          value={this.year}
          onChange={this.handleSelectChange}>
            {years.map(year=>
              <option key={year} value={year}>{year}</option>
              )}
          </select>

          <button class="btn btn-primary btn-lg" onClick={this.handleNextMonthButtonClick}>{'>'}</button>

          <table class="table table-hover">
            <thead>
              <tr>
                {weekDayNames.map(name =>
                  <th scope="col" key={name}>{name}</th>
                  )}
              </tr>
            </thead>
            <tbody>
              {monthDate.map((week,index)=>
                <tr class="table-active" key={index} className='week'>{week.map((date,index)=>date ?
                  <td key={index} className={classnames('day', {
                    'today': calendar.areEqual(date, currentDate),
                    'selected': calendar.areEqual(date, selectedDate)
                })} onClick={()=> this.handleDayClick(date)}>{date.getDate()}</td>
                  :
                  <td key={index}/>
                  )}</tr>
                )}
            </tbody>
          </table>
        </header>
      </div>
    )
  }
}
