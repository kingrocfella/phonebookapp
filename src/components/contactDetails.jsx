import React from "react";

export default function ContactDetails({
  details: { firstName, lastName, phoneNumber, countryCode },
  handleEditContact,
}) {
  return (
    <div className="container">
      <div className="display-end">
        <button
          className="btn btn-primary "
          onClick={() => handleEditContact(true)}
        >
          Edit Contact
        </button>
      </div>

      <table className="table table-borderless mt-5">
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>{`${firstName} ${lastName}`}</td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>{phoneNumber}</td>
          </tr>
          <tr>
            <td>Country Code</td>
            <td>{countryCode}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
