import moment from "moment";

import {setStartDate,setEndDate,setTextFilter,setSortByAmount,setSortByDate} from "./filters";


test ("should genearte set start date",()=>{
  const action=setStartDate(moment(0));
  expect(action).toEqual({
    type:"SET_START_DATE",
    startDate:moment(0)
  });

});

test ("should genearte set end date",()=>{

  const action=setEndDate(moment(0));
  expect(action).toEqual({
    type:"SET_END_DATE",
    endDate:moment(0)
  });
});////////////////=================



test ("should set sort by date",()=>{
  const action=setSortByDate();
  expect(action).toEqual({
    type: 'SET_SORT_BY_DATE',
    sortBy:'Date'
  });
});
test ("should set sort by amount",()=>{
  const action=setSortByAmount();
  expect(action).toEqual({
    type: 'SET_SORT_BY_AMOUNT',
    sortBy:'Amount'
  });
})
test ("should default set text filter",()=>{
  const action=setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:""
  });
})
test ("should set text filter",()=>{
  const action=setTextFilter("Bro");
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:"Bro"
  });
})
