import expenseReducer from "./expenses"
import moment from "moment";

const testExpenses= [{
  id:"1",
  description:"Gum",
  note:"",
  amount: 195,
  createdAt:moment(0).subtract(5,'days').valueOf()
},{
  id:"2",
  description:"Rent",
  note:"",
  amount: 4695,
  createdAt:moment(0).add(4,'days').valueOf()

},{
  id:"3",
  description:"Test ",
  note:"",
  amount: 4595,
  createdAt:moment(0).subtract(4,'days').valueOf()

}

];

test("should setup default expense values",() =>{
  const state=expenseReducer(undefined,{type:'@@INIT'});
  expect(state).toEqual([])

});

test("should add expense",()=>{
  const action={type:"ADD_EXPENSE",expense:testExpenses[0]};
  const state=expenseReducer([],action);
  expect(state).toEqual([testExpenses[0]]);
});
test("should remove expense",()=>{
  const action={type:"REMOVE_EXPENSE",id:"1"};
  const state=expenseReducer(testExpenses,action);
  expect(state).toEqual([testExpenses[1],testExpenses[2]]);
});
test("should remove expense",()=>{
  const action={type:"REMOVE_EXPENSE",id:"-1"};
  const state=expenseReducer(testExpenses,action);
  expect(state).toEqual(testExpenses);
});
test("should edit expense",()=>{
  const updates={notes:"whats up",amount:40000};
  const action={type:"EDIT_EXPENSE",updates:updates,id:"1"};
  const state=expenseReducer(testExpenses,action);
  expect(state).toEqual([{...testExpenses[0],...updates},testExpenses[1],testExpenses[2]]);
});
test("should edit expense",()=>{
  const updates={notes:"whats up",amount:40000};
  const action={type:"EDIT_EXPENSE",updates:updates,id:"-1"};
  const state=expenseReducer(testExpenses,action);
  expect(state).toEqual(testExpenses);
});
test("should set expense",()=>{
  const updates={notes:"whats up",amount:40000};
  const action={type:"SET_EXPENSE",expenses:[...testExpenses]};
  const state=expenseReducer(testExpenses,action);
  expect(state).toEqual(testExpenses);
});
