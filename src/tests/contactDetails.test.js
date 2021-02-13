import React from "react";
import { mount } from "enzyme";
import App from "../views/contactDetails";

let container;
let props;
let mockCallBack;
describe("<App />", () => {
  beforeEach(() => {
    mockCallBack = jest.fn();
    props = {
      details: {
        firstName: "test",
        lastName: "test",
        phoneNumber: "test",
        countryCode: { dialCode: "test" },
      },
      handleEditContact: mockCallBack,
    };
    container = mount(<App {...props} />);
  });
  it("should match the snapshot", () => {
    expect(container.html()).toMatchSnapshot();
  });

  it("render the edit contact button", () => {
    expect(container.find('button[type="button"]').length).toBe(1);
  });

  it("render the table", () => {
    const table = container.find("table");
    const row = container.find("tr");
    expect(table.length).toBe(1);
    expect(row.length).toBe(3);
  });

  it("render the table containing contact information (phone number info)", () => {
    const table = container.find("table");
    expect(
      table.contains(
        <tr>
          <td>Phone Number</td>
          <td>
            <strong>{props.details.phoneNumber}</strong>
          </td>
        </tr>
      )
    ).toBe(true);
  });

  it("Expect handleEditContact fn to be called once the edit contact button is clicked", () => {
    container.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
