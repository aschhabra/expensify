import React from "react";
import {shallow} from "enzyme";
import toJSON from "enzyme-to-json";
import ReactShallowRenderer from "react-test-renderer/shallow";
import {LoginPage} from "./LoginPage";

let startLogin, wrapper;
beforeEach(() => {
  startLogin = jest.fn();
  wrapper = shallow(<LoginPage startLogin={startLogin} />);
});
test ("should render Login button Correctly",()=>{
  expect(toJSON(wrapper)).toMatchSnapshot();
//  expect(wrapper.find('h1').text()).toBe("Expensify");

//  const renderer = new ReactShallowRenderer();
//  renderer.render(<Header/>);
//  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test("should call startLogin on button click",()=>{
  

   wrapper.find("button").simulate("click");
   expect(startLogin).toHaveBeenCalled();
});
