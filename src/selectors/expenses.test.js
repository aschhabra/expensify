import moment from "moment";
import getVisibleExpenses from "./expenses"

const testExpenses= [{
  id:"1",
  description:"Gum",
  note:"",
  amount: 195,
  createdAt:moment(0).subtract(5,'days').valueOf()
},{
  id:"2",
  description:"Rent",
  note:"",
  amount: 4695,
  createdAt:moment(0).add(4,'days').valueOf()

},{
  id:"3",
  description:"Test ",
  note:"",
  amount: 4595,
  createdAt:moment(0).subtract(4,'days').valueOf()

}

];

test("should filter by text value",()=>{
  const filters={
    text:"e",
    sortBy:"Date",
    startDate:undefined,
    endDate:undefined
  };
  const result=getVisibleExpenses(testExpenses,filters);
  expect(result).toEqual([testExpenses[2],testExpenses[1]]);
})
test("should filter by start date value",()=>{
  const filters={
    text:"",
    sortBy:"Date",
    startDate:moment(0).valueOf(),
    endDate:undefined
  };
  const result=getVisibleExpenses(testExpenses,filters);
  expect(result).toEqual([testExpenses[0],testExpenses[2],testExpenses[1]]);

})

test("should filter by end date value",()=>{
  const filters={
    text:"",
    sortBy:"Date",
    startDate:undefined,
    endDate:moment(0)
  };
  const result=getVisibleExpenses(testExpenses,filters);
  expect(result).toEqual([testExpenses[0],testExpenses[2]]);

})
test("should filter by sort by amount value",()=>{
  const filters={
    text:"",
    sortBy:"Amount",
    startDate:undefined,
    endDate:undefined
  };
  const result=getVisibleExpenses(testExpenses,filters);
  expect(result).toEqual([testExpenses[0],testExpenses[2],testExpenses[1]]);

})
