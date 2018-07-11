import React from "react";
import {connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpense from "./../selectors/expenses";

export const ExpenseList= (props) => (
    <div>
      <h1> Expense List</h1>
      { props.expenses.length===0 ?
        (
          <p> there is no Expense in the list</p>
        ):
        (
          props.expenses.map((expense)=> {
            return <ExpenseListItem key={expense.id} {...expense} />;
          })
        )
      }
    </div>

);

const ConnectedExpenseList = connect((state)=>{
  return {
    expenses: getVisibleExpense(state.expenses,state.filters)
  };
})(ExpenseList);


export default ConnectedExpenseList;
