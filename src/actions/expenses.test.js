import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {startSetExpense,startAddExpense,addExpense, editExpense, removeExpense,setExpenses} from "./expenses"
import testExpenses from "../fixtures/expenses";
import database from "../firebase/firebase";


const createMockStore=configureMockStore([thunk]);
beforeEach((done)=>{
  const expenseData={};
  testExpenses.forEach(({id,description,note,amount,createdAt})=>{
    expenseData[id]={description,note,amount,createdAt};
  })
  database.ref("expenses").set(expenseData).then(()=> done());
})


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
  const action=addExpense(testExpenses[2])
  expect(action).toEqual({
    type:"ADD_EXPENSE",
    expense:testExpenses[2]
  });
});
// test("should setup add expenses action default object",() =>{
//   const expenseData={
//   };
//   const expectedExpenseData={
//     description:'',
//     note: '',
//     amount:0,
//     createdAt:0
//   };
//   const action=addExpense(expenseData)
//   expect(action).toEqual({
//     type:"ADD_EXPENSE",
//     expense:{
//     ...expectedExpenseData,
//     id: expect.any(String)
//     }
//   });
// });
test("should add exepnse to database and store",(done)=>{
  const store=createMockStore({});
  const expenseData={
    description:'Rent',
    note: 'Test note',
    amount:1090,
    createdAt:1000
  };

  store.dispatch(startAddExpense(expenseData))
    .then(()=>{
      const actions=store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
        id: expect.any(String),
        ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("should add default exepnse to database and store",(done)=>{
  const store=createMockStore({});
  const expenseData={
    description:'',
    note: '',
    amount:0,
    createdAt:0
  };

  store.dispatch(startAddExpense({}))
    .then(()=>{
      const actions=store.getActions();
      expect(actions[0]).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
          id: expect.any(String),
          ...expenseData
        }
      });
      return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    })
    .then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test("should setup set expenses action object",() =>{
  const expenseData={
    description:'Rent',
    note: 'Test note',
    amount:1090,
    createdAt:1000
  };
  const action=setExpenses(testExpenses[2])
  expect(action).toEqual({
    type:"SET_EXPENSE",
    expenses:testExpenses[2]
  });
});
test("should set exepnse to database and store",(done)=>{
  const store=createMockStore({});
  store.dispatch(startSetExpenses()).then(()=>{
    const actions=store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses:testExpenses
    });
    done();
    
  });

});
