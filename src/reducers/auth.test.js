import authReducer from "./auth";


test("should loging with id",()=>{
  const uid="12370409187234";
  const action={type:"LOGIN",uid};
  const state=authReducer([],action);
  expect(state).toEqual({uid});
});
test("should logout",()=>{
  const action={type:"LOGOUT"};
  const state=authReducer([],action);
  expect(state).toEqual({});
});
