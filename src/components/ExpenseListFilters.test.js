import React from "react";
import {shallow} from "enzyme";
import {ExpenseListFilters} from "./ExpenseListFilters";
import {filters,altFilters} from "../fixtures/filters"
import moment from "moment";

let setTextFilter, 
setSortByDate,
setSortByAmount,
setStartDate,
setEndDate,
wrapper;

beforeEach(() => {
  setTextFilter=jest.fn(); 
  setSortByDate=jest.fn();
  setSortByAmount=jest.fn();
  setStartDate=jest.fn();
  setEndDate=jest.fn();
  wrapper = shallow(<ExpenseListFilters 
                          filters={filters}
                          setTextFilter  =  {setTextFilter}  
                          setSortByDate  =  {setSortByDate}
                          setSortByAmount=  {setSortByAmount}
                          setStartDate   =  {setStartDate}
                          setEndDate  = {setEndDate}
                    />);
});

test( "test should render ExpenseListFilters with filtesr",()=>{


  expect(wrapper).toMatchSnapshot();
});
test( "test should render ExpenseListFilters with altfiltesr",()=>{

  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("shoud handle set by text",()=>{
  const value="rent";
  wrapper.find("input").simulate("change",{
    target: {value}
  });
  expect(setTextFilter).toHaveBeenCalledWith(value);
})
test("should handle set by date",()=>{
    
  const value="date";
  wrapper.setProps({
    filters:altFilters
  })
  wrapper.find("select").simulate("change",{
    target: {value}
  });
  expect(setSortByDate).toHaveBeenCalledWith();
})
test("should handle set by amount",()=>{
    
  const value="amount";
  wrapper.find("select").simulate("change",{
    target: {value}
  });
  expect(setSortByAmount).toHaveBeenCalledWith();
})

test ("shoudl handle date change",()=>{
  const startDate=moment(0).add(4,"years");
  const endDate=moment(0).add(8,"years");
  wrapper.find("withStyles(DateRangePicker)").prop("onDatesChange")({startDate,endDate});
  expect(setStartDate).toHaveBeenCalledWith(startDate);
  expect(setEndDate).toHaveBeenCalledWith(endDate);
  
})

test("should handle focus change",()=>{
  const calendarFocused="true";
  wrapper.find("withStyles(DateRangePicker)").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calendarFocusued")).toBe(calendarFocused);
  
})
