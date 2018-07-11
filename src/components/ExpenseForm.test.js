import React from "react";
import {shallow} from "enzyme";
import ExpenseForm from "./ExpenseForm";
import moment from "moment";
import testexpenses from "../fixtures/expenses"
test("test should render ExpenseForm",() =>{
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

})


test("test should render ExpenseForm with data",() =>{
    const wrapper = shallow(<ExpenseForm expense={testexpenses[0]}/>);

    expect(wrapper).toMatchSnapshot();

})
test("test should render ExpenseForm with invalid submission data",() =>{
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();

})
test("test should render ExpenseForm with simulate submission data",() =>{
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("form").simulate("submit",{
      preventDefault: ()=>{
      }
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})
test("test set description in the input change",() =>{
    const value= "New Description";
    const wrapper = shallow(<ExpenseForm expense={testexpenses[0]}/>);
    wrapper.find("input").at(0).simulate("change",{
      target: {value}
    });
    
    expect(wrapper.state("description")).toBe(value);
    expect(wrapper).toMatchSnapshot();

})
test("test set note in the input change",() =>{
    const value= "New Description";
    const wrapper = shallow(<ExpenseForm expense={testexpenses[0]}/>);
    wrapper.find("textarea").simulate("change",{
      target: {value}
    });
    
    expect(wrapper.state("note")).toBe(value);

})
test("test set amount in the input change",() =>{
    const value= "12.22";
    const wrapper = shallow(<ExpenseForm expense={testexpenses[0]}/>);
    wrapper.find("input").at(1).simulate("change",{
      target: {value}
    });
    
    expect(wrapper.state("amount")).toBe(value);

})

test("test set amount in the input change",() =>{
    const value= "12.222";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
      target: {value}
    });
    
    expect(wrapper.state("amount")).toBe("");

})
test("should call onSubmit props for valid form submission",()=>{
    const onSubmitSpy= jest.fn();
    const wrapper = shallow(<ExpenseForm expense={testexpenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find("form").simulate("submit",{
      preventDefault: () =>{}
    });
    expect(wrapper.state("error")).toBe("");
    expect(onSubmitSpy).toHaveBeenCalledWith({
      description: testexpenses[0].description,
      amount: testexpenses[0].amount,
      note: testexpenses[0].note,
      createdAt: testexpenses[0].createdAt,

    });

})

test("should set new date on date change",()=>{
    const now= moment();  
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop("onDateChange")(now);

    expect(wrapper.state('createdAt')).toEqual(now);
})
test("should set new date on focus change",()=>{
    const focused= true;  
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop("onFocusChange")({focused});

    expect(wrapper.state('calenderFocused')).toBe(focused);
})
