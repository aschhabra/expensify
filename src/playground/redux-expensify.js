import {createStore,combineReducers } from 'redux';
import uuid from 'uuid';

// ADD EXPENSEi
const addExpense= (
  {
    description='',
    note= '',
    amount=0,
    createdAt=0
  } = {}
  )=>({
    type: 'ADD_EXPENSE',
    expense:{
      id:uuid(),
      description,
      note,
      amount,
      createdAt
    }
});


// REMOVE EXPENSE
const removeExpense= ({ id } = {})=>({
    type: 'REMOVE_EXPENSE',
    id
});
// EDIT EXPENSE
const editExpense= (id,updates)=>({
    type: 'EDIT_EXPENSE',
    id: id,
    updates: updates
    
});
const setTextFilter= (text='')=>({
    type: 'SET_TEXT_FILTER',
    text:text 
});
// SET TEXT FILTER
const setSortByDate= ()=>({
    type: 'SET_SORT_BY_DATE',
    sortBy:'Date'
});
const setSortByAmount= ()=>({
    type: 'SET_SORT_BY_AMOUNT',
    sortBy:'Amount'
});
// SORT BY DATA
// SORT BY AMOUNT
// SET START DATA
const setStartDate= (startDate)=>({
    type: 'SET_START_DATE',
    startDate:startDate
});
const setEndDate= (endDate)=>({
    type: 'SET_END_DATE',
    endDate:endDate
});
// SET END DATA

// Expenses Reducer
const expenseReducerDefaultState= [];

const expenseReducer= (state=expenseReducerDefaultState, action) =>{
  switch(action.type){
    case 'ADD_EXPENSE':
      return [...state,action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id})=>{
          return id!==action.id;
      });
    case 'EDIT_EXPENSE':
      return state.map((expense)=>{
          if(expense.id===action.id){
            return {...expense,...action.updates};
          }else{
            return expense;
          }
      });
    default:
      return state;
    
  }

};

// Filter Reducer
const filterReducerDefaultState= {text:'',sortBy: 'data',startDate: undefined,endData:undefined};

const filterReducer= (state=filterReducerDefaultState, action) =>{
  switch(action.type){
    case 'SET_TEXT_FILTER':
    return {...state,text:action.text}
    case 'SET_SORT_BY_DATE':
    return {...state,sortBy:action.sortBy}
    case 'SET_SORT_BY_AMOUNT':
    return {...state,sortBy:action.sortBy}
    case 'SET_START_DATE':
    return {...state,startDate:action.startDate}
    case 'SET_END_DATE':
    return {...state,endDate:action.endDate}
    default:
      return state;
    
  }

};
const store=createStore(
    combineReducers({
      expenses:expenseReducer,
      filters:filterReducer
    })
);

const getVisibleExpense = (expenses, {text,sortBy,startDate,endDate}) =>{
  return expenses.filter((expense)=>{
      const startDateMatch = typeof startDate!=='number' || expense.createdAt >=startDate;
      const endDateMatch = typeof endDate!=='number' || expense.createdAt<=endDate;
      const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
      if(sortBy==='Date'){
        return a.createdAt < b.createdAt? 1: -1;
      }
      if(sortBy==='Amount'){
        return a.Amount < b.Amount? 1: -1;
      }
    });
};
store.subscribe(()=>{
  const state =store.getState();
  const visibleExpesens=getVisibleExpense(state.expenses,state.filters);
  console.log(visibleExpesens);
  
});
console.log(store.getState());


const demoState= {
  expenses: [{
    id: 'akjshdfkjahsdf',
    description: 'January',
    note: 'This was final payment from that address',
    amount: 54500,
    createdAt:0
  }],
  filter:{
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endData: undefined
  }
};


const expenseOne=store.dispatch(addExpense({
  description: 'Rent',
  amount: 100,
  createdAt: -21000
}));
const expenseTwo=store.dispatch(addExpense({
  description: 'Grocery',
  amount: 2100,
  createdAt: -1000
}));

//const {id: expId} = expenseOne.expense;
// store.dispatch(removeExpense({id:expId}));
// store.dispatch(editExpense(expenseTwo.expense.id, {description: 'bro'}
// ));
// store.dispatch(setTextFilter());
// store.dispatch(setTextFilter('TESTING'));
// store.dispatch(setSortByDate());
// store.dispatch(setSortByAmount());
//store.dispatch(setStartDate(-1000));
//store.dispatch(setTextFilter('rent'));
store.dispatch(setSortByDate());
store.dispatch(setSortByAmount());
//store.dispatch(setEndDate(13));
