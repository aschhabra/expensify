import {createStore,combineReducers,applyMiddleware} from "redux";
import expenseReducer from './../reducers/expenses';
import filtersReducer from './../reducers/filters';
import thunk from "redux-thunk";

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
//store
const store=createStore(
    combineReducers({
      expenses:expenseReducer,
      filters:filtersReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

return store;
}
