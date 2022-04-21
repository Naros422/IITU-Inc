import React, { Component } from 'react'

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
console.log(date)
this.setState({date});

};
handleNextMonthButtonClick = () =>{
  const date = new Date(this.year,this.month+1);
  console.log(date)
this.setState({date});
};
handleSelectChange = () =>{
  
};
handleDayClick = date =>{
  console.log(date)
  this.setState({selectedDate:date});

  this.props.onChange(date);
};

  render() {
    const{years,monthNames,weekDayNames} = this.props;

    const monthDate = [
      [undefined,undefined,new Date(),new Date(),new Date(),new Date(),new Date()],
      [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
      [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
      [new Date(),new Date(),new Date(),new Date(),new Date(),new Date(),new Date()],
      [new Date(),new Date(),new Date(),new Date(),undefined,undefined,undefined]
    ];

    return (
      <div className='attendance'>
        <header>
          <button onClick={this.handlePrevMonthButtonClick}>{'<'}</button>

          <select>
            {monthNames.map((name,index)=>
            <option key={name} value={index}>{name}</option>
            )}
          </select>
          
          <select>
            {years.map(year=>
              <option key={year} value={year}>{year}</option>
              )}
          </select>

          <button onClick={this.handleNextMonthButtonClick}>{'>'}</button>

          <table>
            <thead>
              <tr>
                {weekDayNames.map(name =>
                  <th key={name}>{name}</th>
                  )}
              </tr>
            </thead>
            <tbody>
              {monthDate.map((week,index)=>
                <tr key={index} className='week'>{week.map((date,index)=>date ?
                  <td key={index} className='day' onClick={()=> this.handleDayClick(date)}>{date.getDate()}</td>
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
