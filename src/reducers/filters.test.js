import filtersReducer from "./filters"
import moment from "moment";

test("should setup default filter values",() =>{
  const state=filtersReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual({
    text:'',
    sortBy:'',
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month")
  })

});

test ("should set sortBy to amount",()=>{
  const filterReducerState= {text:'',sortBy: '',startDate: undefined,endDate:moment().endOf('month')};
  const action={type: "SET_SORT_BY_AMOUNT",sortBy:"Amount"};
  const state=filtersReducer(filterReducerState,action);
  expect(state.sortBy).toBe("Amount");
});
 test ("should set sortBy to date",()=>{
   const filterReducerState= {text:'',sortBy: '',startDate: undefined,endDate:moment().endOf('month')};
   const action={type: "SET_SORT_BY_DATE",sortBy:"Date"};
   const state=filtersReducer(filterReducerState,action);
   expect(state.sortBy).toBe("Date");
 });
 test ("should set text filter",()=>{
   const filterReducerState= {text:'',sortBy: '',startDate: undefined,endDate:moment().endOf('month')};
   const action={type: "SET_TEXT_FILTER",text:"rent"};
   const state=filtersReducer(filterReducerState,action);
   expect(state.text).toBe("rent");
 });
 test ("should set start date",()=>{
   const filterReducerState= {text:'',sortBy: '',startDate: undefined,endDate:moment().endOf('month')};
   const date=moment();
   const action={type: "SET_START_DATE",startDate:date};
   const state=filtersReducer(filterReducerState,action);
   expect(state.startDate).toBe(date);
 });
 test ("should set end date",()=>{
   const filterReducerState= {text:'',sortBy: '',startDate: undefined,endDate:moment().endOf('month')};
   const date=moment();
   const action={type: "SET_END_DATE",endDate:date};
   const state=filtersReducer(filterReducerState,action);
   expect(state.endDate).toBe(date);
 });
