import React from "react";
import {connect} from "react-redux";
import {setTextFilter,setSortByDate,setSortByAmount,setStartDate,setEndDate} from "../actions/filters"
import {DateRangePicker} from "react-dates";

export class ExpenseListFilters extends React.Component{
  state= {
    calnedarFocused:null 
  };
  onDatesChange= ({startDate,endDate})=>{
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange =(calendarFocused) =>{
    this.setState(()=>({calendarFocused}));
  }
  onTextChange=(e)=>{
    this.props.setTextFilter(e.target.value);
  }
  onSortChange=(e)=>{
    if(e.target.value==="date"){
      this.props.setSortByDate();
    }else if(e.target.value==="amount"){
      this.props.setSortByAmount();
    }
  }
  render(){
    return(
    <div>
      <input 
        type="text" 
        value={this.props.filters.text} 
        onChange={this.onTextChange}
      />
      <select 
        value= {this.props.filters.sortBy} 
        onChange={this.onSortChange}
      >
        <option value="Select">Select</option>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
      <div> 
      <DateRangePicker
        startDateId="startDate"
        endDateId="endDate"
        startDate={this.props.filters.startDate}
        endDate={this.props.filters.endDate}
        onDatesChange={this.onDatesChange}
        focusedInput={this.state.calendarFocused}
        onFocusChange={this.onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
      />
      </div> 
    </div>
    );
  };
}
const mapStateToProps= (state) =>{
  return {
    filters: state.filters
  };

};
const mapDispatchToProps= (dispatch)=>({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  setSortByDate:() => dispatch(sortByDate()),
  setSortByAmount: ()=>dispatch(sortByAmount),
  setStartDate: (startDate)=>dispatch(setStartDate(startDate)),
  setEndDate: (endDate) =>dispatch(setEndDate(endDate))

})
export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters);
