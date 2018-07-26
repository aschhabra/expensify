
import React from "react";
import {shallow} from "enzyme";
import {EditExpensePage} from "./EditExpensePage";
import testexpenses from "../fixtures/expenses"

let startEditExpense,history, wrapper,startRemoveExpense;
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage 
                      startEditExpense={startEditExpense} 
                      startRemoveExpense={startRemoveExpense} 
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
   expect(startEditExpense).toHaveBeenLastCalledWith(testexpenses[2].id,testexpenses[2]);
})
test("should handle removeExpense",()=>{

   wrapper.find("button").simulate("click");
   expect(history.push).toHaveBeenLastCalledWith("/");
   expect(startRemoveExpense).toHaveBeenLastCalledWith({
      id:testexpenses[2].id
    });
})
