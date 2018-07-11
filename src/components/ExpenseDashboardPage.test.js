
import React from "react";
import {shallow} from "enzyme";
import ExpenseDashboardPage from "./ExpenseDashboardPage";
import expenses from "../fixtures/expenses"

test( "test should render ExpenseList with expenses",()=>{
  const wrapper= shallow(<ExpenseDashboardPage/>);


  expect(wrapper).toMatchSnapshot();
});
