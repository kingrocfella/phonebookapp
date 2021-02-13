import React from "react";
import { mount } from "enzyme";
import App from "../views/contactList";

let container;
let props;
let mockCallBack;
let table;
let row;
describe("<App />", () => {
  beforeEach(() => {
    mockCallBack = jest.fn();
    props = {
      arr: [
        { firstName: "test", lastName: "test", id: 1, check: false },
        { firstName: "test", lastName: "test", id: 2, check: false },
        { firstName: "test", lastName: "test", id: 3, check: false },
      ],
      handleViewDetails: mockCallBack,
      handleCheckboxClick: mockCallBack,
    };
    container = mount(<App {...props} />);
    table = container.find("table");
    row = container.find("tr");
  });

  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("render the table and the rows depending on the contact list length", () => {
    expect(table.length).toBe(1);
    expect(row.length).toBe(props.arr.length);
  });

  it("Render checkbox for each row on the table", () => {
    expect(container.find('input[type="checkbox"]').length).toBe(
      props.arr.length
    );
  });

  it("handleCheckboxClick func should be called once checkbox is clicked", () => {
    container
      .find('input[type="checkbox"]')
      .at(1)
      .simulate("change", { target: { checked: true } });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  it("view details button for a row should be visible once that row is hovered over", () => {
    const btnRow = row.at(1).simulate("mouseenter");
    expect(btnRow.find("button").length).toEqual(1);
  });

  it("handleViewDetails func should be called once the view details button for a row is clicked", () => {
    const btnRow = row.at(1).simulate("mouseenter");
    btnRow.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
