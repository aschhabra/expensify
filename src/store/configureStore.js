import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import expenseReducer from './../reducers/expenses';
import filtersReducer from './../reducers/filters';
import authReducer from "./../reducers/auth";

const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
//store
const store=createStore(
    combineReducers({
      expenses:expenseReducer,
      filters:filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
);

return store;
}
