import moment from "moment";

const getVisibleExpense = (expenses, {text,sortBy,startDate,endDate}) =>{
  return expenses.filter((expense)=>{
      const startDateMatch = startDate? startDate.isSameOrBefore(moment(expense.createdAt),'day') : true;
      const endDateMatch = endDate? endDate.isSameOrAfter(moment(expense.createdAt),'day'): true;
      const textMatch= expense.description.toLowerCase().includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
      if(sortBy==='Date'){
        return a.createdAt < b.createdAt? -1: 1;
      }
      else if(sortBy==='Amount'){
        return a.amount < b.amount? -1: 1;
      }
    });
};

export default getVisibleExpense;
