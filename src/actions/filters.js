
export const setTextFilter= (text='')=>({
    type: 'SET_TEXT_FILTER',
    text:text 
});
// SET TEXT FILTER
export const setSortByDate= ()=>({
    type: 'SET_SORT_BY_DATE',
    sortBy:'Date'
});
export const setSortByAmount= ()=>({
    type: 'SET_SORT_BY_AMOUNT',
    sortBy:'Amount'
});
// SORT BY DATA
// SORT BY AMOUNT
// SET START DATA
export const setStartDate= (startDate)=>({
    type: 'SET_START_DATE',
    startDate:startDate
});
export const setEndDate= (endDate)=>({
    type: 'SET_END_DATE',
    endDate:endDate
});
