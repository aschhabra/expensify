
import React from "react";
import {shallow} from "enzyme";
import NotFoundPage from "./NotFoundPage";

test( "test should render Not Found with expenses",()=>{
  const wrapper= shallow(<NotFoundPage/>);


  expect(wrapper).toMatchSnapshot();
});
