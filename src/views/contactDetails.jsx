import React from "react";
import PropTypes from "prop-types";

function ContactDetails({
  details: {
    firstName,
    lastName,
    phoneNumber,
    countryCode: { dialCode },
  },
  handleEditContact,
}) {
  return (
    <div className="container">
      <div className="display-end">
        <button
          className="btn primary-button"
          onClick={() => handleEditContact(true)}
          type="button"
        >
          Edit Contact
        </button>
      </div>
      <table className="table mt-5">
        <tbody>
          <tr>
            <td>Full Name</td>
            <td>
              <strong>{`${firstName} ${lastName}`}</strong>
            </td>
          </tr>
          <tr>
            <td>Phone Number</td>
            <td>
              <strong>{phoneNumber}</strong>
            </td>
          </tr>
          <tr>
            <td>Country Code</td>
            <td>
              <strong>{`+${dialCode}`}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

ContactDetails.propTypes = {
  handleEditContact: PropTypes.func.isRequired,
  details: PropTypes.object.isRequired,
};

export default ContactDetails;
