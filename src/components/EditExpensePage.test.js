
import React from "react";
import {shallow} from "enzyme";
import {EditExpensePage} from "./EditExpensePage";
import testexpenses from "../fixtures/expenses"

let editExpense,history, wrapper,removeExpense;
beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
                      editExpense={editExpense} 
                      removeExpense={removeExpense} 
                      history={history} 
                      expense={testexpenses[2]}
                    />);
});

test("should render edit expense",()=>{
    expect(wrapper).toMatchSnapshot();
})

test("should hanlde editExpense",()=>{

   wrapper.find("ExpenseForm").prop("onSubmit")(testexpenses[2]);
   expect(history.push).toHaveBeenLastCalledWith("/");
   expect(editExpense).toHaveBeenLastCalledWith(testexpenses[2].id,testexpenses[2]);
})
test("should handle removeExpense",()=>{

   wrapper.find("button").simulate("click");
   expect(history.push).toHaveBeenLastCalledWith("/");
   expect(removeExpense).toHaveBeenLastCalledWith({
      id:testexpenses[2].id
    });
})
