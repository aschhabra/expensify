import React from "react";
import {shallow} from "enzyme";
import {ExpenseList} from "./ExpenseList";
import expenses from "../fixtures/expenses"

test( "test should render ExpenseList with expenses",()=>{
  const wrapper= shallow(<ExpenseList expenses={expenses}/>);


  expect(wrapper).toMatchSnapshot();
});
test( "test should render ExpenseList without expenses",()=>{
  const wrapper= shallow(<ExpenseList expenses={[]}/>);


  expect(wrapper).toMatchSnapshot();
});
