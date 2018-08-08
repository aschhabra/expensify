import React from "react";
import {connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import getVisibleExpense from "./../selectors/expenses";

export const ExpenseList= (props) => (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        { props.expenses.length===0 ?
          (
            <div className="list-item list-item__message"> <span>There is no Expense in the list</span></div>
          ):
          (
            props.expenses.map((expense)=> {
              return <ExpenseListItem key={expense.id} {...expense} />;
            })
          )
        }
      </div>
    </div>

);

const ConnectedExpenseList = connect((state)=>{
  return {
    expenses: getVisibleExpense(state.expenses,state.filters)
  };
})(ExpenseList);


export default ConnectedExpenseList;
