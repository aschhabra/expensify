import selectExpenesesTotal from "./expense-total.js";
import expenses from "../fixtures/expenses";

test("should return 0 if no expeneses",()=>{
  const res=selectExpenesesTotal([]);
  expect(res).toBe(0);

})
test("should return add up to single  expenese",()=>{
  const res=selectExpenesesTotal([expenses[0]]);
  expect(res).toBe(expenses[0].amount);

})
