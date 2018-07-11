
import React from "react";
import ExpenseList from "./ExpenseList"
import ExpenseListFilters from "./ExpenseListFilters"

const ExpenseDashboardPage= () => (
  <div>
    <p> This is form dashboard</p>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpenseDashboardPage;
