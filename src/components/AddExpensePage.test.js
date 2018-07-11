import React from "react";
import {shallow} from "enzyme";
import {AddExpensePage} from "./AddExpensePage";
import testexpenses from "../fixtures/expenses"


let onSubmit,history, wrapper;
beforeEach(() => {
  onSubmit = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history} />);
});


test("should render AddExpensepage Correctly",()=>{

  expect(wrapper).toMatchSnapshot();
  

})

 test("shoudl handle onSubmit",()=>{
   wrapper.find("ExpenseForm").prop("onSubmit")(testexpenses[0]);
   expect(history.push).toHaveBeenLastCalledWith("/");
   expect(onSubmit).toHaveBeenLastCalledWith(testexpenses[0]);
   
 
 })
