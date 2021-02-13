import React, { useState } from "react";
import PhoneNumberField from "../components/PhonenumberField";
import PropTypes from "prop-types";

function AddContact({
  addContacts,
  enableEditing,
  saveEditedContact,
  details,
}) {
  const [firstName, handleFirstName] = useState("");
  const [lastName, handleLastName] = useState("");
  const [phoneNumber, handlePhoneNumber] = useState("");
  const [countryCode, handleCountryCode] = useState("");
  const [editedfirstName, handleEditedFirstName] = useState(details.firstName);
  const [editedlastName, handleEditedLastName] = useState(details.lastName);
  const [editedphoneNumber, handleEditedPhoneNumber] = useState(
    details.phoneNumber
  );
  const [editedcountryCode, handleEditedCountryCode] = useState(
    details.countryCode
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phoneNumber) return;
    const data = {
      firstName,
      lastName,
      phoneNumber,
      countryCode,
      id: Date.now(),
      check: false,
    };
    addContacts(data);
  };

  const handleSavedChanges = (e) => {
    e.preventDefault();
    if (!editedfirstName || !editedlastName || !editedphoneNumber) return;
    const data = {
      firstName: editedfirstName,
      lastName: editedlastName,
      phoneNumber: editedphoneNumber,
      countryCode: editedcountryCode,
      id: Date.now(),
      check: false,
    };
    saveEditedContact(data);
  };

  return (
    <div className="container">
      <form onSubmit={enableEditing ? handleSavedChanges : handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="firstname">First Name</label>
            <input
              value={enableEditing ? editedfirstName : firstName}
              type="text"
              className="form-control datatest-5"
              placeholder="First Name"
              onChange={(e) => {
                if (enableEditing) handleEditedFirstName(e.target.value);
                else handleFirstName(e.target.value);
              }}
              aria-describedby="first name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="lastname">Last Name</label>
            <input
              value={enableEditing ? editedlastName : lastName}
              type="text"
              className="form-control datatest-6"
              placeholder="Last Name"
              onChange={(e) => {
                if (enableEditing) handleEditedLastName(e.target.value);
                else handleLastName(e.target.value);
              }}
              aria-describedby="last name"
            />
          </div>
        </div>
        <div className="form-group datatest-4">
          <label htmlFor="phonenumber">Phone Number</label>
          <PhoneNumberField
            countryCode={enableEditing ? editedcountryCode.countryCode : null}
            value={enableEditing ? editedphoneNumber : phoneNumber}
            handleChange={(num, code) => {
              if (enableEditing) {
                handleEditedPhoneNumber(num);
                handleEditedCountryCode(code);
              } else {
                handlePhoneNumber(num);
                handleCountryCode(code);
              }
            }}
          />
        </div>
        <button
          type="submit"
          className="mt-5 btn block-button btn-block datatest-3"
          disabled={
            (enableEditing &&
              (!editedcountryCode || !editedlastName || !editedphoneNumber)) ||
            (!enableEditing && (!firstName || !lastName || !phoneNumber))
          }
        >
          {enableEditing ? "SAVE CHANGES" : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}

AddContact.propTypes = {
  addContacts: PropTypes.func.isRequired,
  saveEditedContact: PropTypes.func.isRequired,
  enableEditing: PropTypes.bool.isRequired,
  details: PropTypes.object.isRequired,
};

export default AddContact;
