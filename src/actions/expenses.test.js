import {addExpense, editExpense, removeExpense} from "./expenses"

test("should setup remove expenses action object",() =>{
  const action=removeExpense({id:"123abc"})
  expect(action).toEqual({
    type:"REMOVE_EXPENSE",
    id:"123abc"
  });
});
test("should setup edit expenses action object",() =>{
  const action=editExpense("123abc",{note: "new note"})
  expect(action).toEqual({
    type:"EDIT_EXPENSE",
    id:"123abc",
    updates:{
      note: "new note"
    }
  });
});
test("should setup add expenses action object",() =>{
  const expenseData={
    description:'Rent',
    note: 'Test note',
    amount:1090,
    createdAt:1000
  };
  const action=addExpense(expenseData)
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense:{
    ...expenseData,
    id: expect.any(String)
    }
  });
});
test("should setup add expenses action default object",() =>{
  const expenseData={
  };
  const expectedExpenseData={
    description:'',
    note: '',
    amount:0,
    createdAt:0
  };
  const action=addExpense(expenseData)
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense:{
    ...expectedExpenseData,
    id: expect.any(String)
    }
  });
});
