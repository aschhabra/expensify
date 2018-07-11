import {createStore} from "redux";

// action generators

const incrementCount= ({incrementBy=1}= {}) => ( { 
  type:'INCREMENT',
  incrementBy: incrementBy
});

const setCount= ({count=1}= {}) => ( { 
  type:'SET',
  count: count
});
const decrementCount= ({decrementBy=1}= {}) => ( { 
  type:'DECREMENT',
  decrementBy: decrementBy
});
const resetCount= () => ( { 
  type:'RESET'
});
const countReducer = (state={count: 0},action) => {
  switch(action.type){
    case "INCREMENT":
      const incrementBy= typeof action.incrementBy=== 'number'? action.incrementBy: 1;
      return {
      count: state.count+ incrementBy
    };
    case "DECREMENT":
      const decrementBy= typeof action.decrementBy=== 'number'? action.decrementBy: 1;
      return {
      count: state.count-decrementBy
    };
    case "RESET":
      return {
      count: 0
    };
    case "SET":
      return {
      count: action.count
    };
    default:
      return state;
  }

};

const store= createStore(countReducer);
const unsubscribe= store.subscribe(() => {
  console.log(store.getState());

});
store.dispatch(incrementCount({incrementBy: 100}));
store.dispatch(setCount({count: 133300}));
store.dispatch(resetCount());

store.dispatch(decrementCount({decrementBy: 1001}));
store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});
store.dispatch({
  type: 'INCREMENT'
});
store.dispatch({
  type: 'DECREMENT'
});
store.dispatch({
  type: 'DECREMENT',
  decrementBy: 15
});
store.dispatch({
  type: 'SET',
  count: 50
});
store.dispatch({
  type: 'DECREMENT'
});

unsubscribe();
store.dispatch({
  type: 'RESET'
});
