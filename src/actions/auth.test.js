import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {login,logout} from "./auth";


test("should setup login action",() =>{
  const uid="00d1";
  const actions=login(uid);
  expect(actions).toEqual({
    type:"LOGIN",
    uid
  })

});
test("should setup logout action",() =>{
  const actions=logout();
  expect(actions).toEqual({
    type:"LOGOUT"
  })

});
