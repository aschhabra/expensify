import React from "react";
import {shallow} from "enzyme";
import ExpenseListItem from "./ExpenseListItem";
import expenses from "../fixtures/expenses"

test( "test should render ExpenseListItem with expenses[0]",()=>{

  const wrapper= shallow(<ExpenseListItem {...expenses[0]}/>);


  expect(wrapper).toMatchSnapshot();
});
