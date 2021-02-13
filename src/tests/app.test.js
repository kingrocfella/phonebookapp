import React from "react";
import { shallow } from "enzyme";
import App from "../views/App";
import { findClassAtrr } from "./utils";

describe("<App /> on page load", () => {
  const container = shallow(<App />);

  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("Render the no contacts text element", () => {
    expect(findClassAtrr(container, "datatest-1").length).toEqual(1);
  });

  it("Render the add contact button", () => {
    expect(findClassAtrr(container, "datatest-2").length).toEqual(1);
  });
});