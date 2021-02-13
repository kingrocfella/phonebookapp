import React from "react";
import { shallow, mount } from "enzyme";
import App from "../views/addContact";
import { findClassAtrr } from "./utils";

const mockCallBack = jest.fn();
const props = {
  details: {
    firstName: "test",
    lastName: "test",
    phoneNumber: "test",
  },
  addContacts: mockCallBack,
  enableEditing: false,
  saveEditedContact: mockCallBack,
};
const container = shallow(<App {...props} />);
const mountContainer = mount(<App {...props} />);

describe("<App />", () => {
  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("Should have proper props for text and tel fields", () => {
    expect(container.find('input[type="text"]').length).toEqual(2);
    expect(findClassAtrr(container, "datatest-4").length).toEqual(1);
  });

  it("It should have a submit button", () => {
    expect(container.find('button[type="submit"]').length).toEqual(1);
  });

  it("Submit button should have test of SUBMIT and be disabled", () => {
    const btn = findClassAtrr(mountContainer, "datatest-3")
    expect(btn.get(0).props.children).toBe("SUBMIT");
    expect(btn.get(0).props.disabled).toBe(true);
  });
});
