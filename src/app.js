import React from "react";
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import { BrowserRouter,Switch, Route, Link, NavLink} from 'react-router-dom';
import AppRouter,{history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense,startSetExpenses } from "./actions/expenses";
import { login,logout } from "./actions/auth";
import getVisibleExpense from "./selectors/expenses";
import 'react-dates/initialize';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css"
import {firebase} from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

console.log('App.js is running!');
const element=<div><p>This is boilerplat</p></div>;

const store = configureStore();

 store.subscribe(()=>{
   const state =store.getState();
   const visibleExpesens=getVisibleExpense(state.expenses,state.filters);
   console.log(visibleExpesens);
   console.log(state.filters);  
 });
 const expenseOne=store.dispatch(addExpense({
   description: 'Rent',
   amount: 4500,
   createdAt: 100
 }));
 const expenseTwo=store.dispatch(addExpense({
   description: 'Grocery',
   amount: 2100,
   createdAt: 1000
 }));

const jsx= (
  <Provider store={store}>
    <AppRouter />
  </Provider>

);
let hasRendered=false;
const renderApp= () =>{
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById('app'));
    hasRendered=true;
  }

};

ReactDOM.render(<LoadingPage/>, document.getElementById('app'));

 firebase.auth().onAuthStateChanged((user)=>{
   if(user){
     console.log("login");
     store.dispatch(login(user.uid));
     store.dispatch(startSetExpenses()).then(()=>{
       renderApp(); 
       if(history.location.pathname==="/"){
         history.push("/dashboard");
       }
     });
   }else{
     console.log("logout");
     store.dispatch(logout());
     renderApp(); 
     history.push("/");
   }
 });
