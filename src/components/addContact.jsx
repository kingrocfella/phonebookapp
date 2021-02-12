import React, { useState } from "react";

export default function AddContact({
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
            <label htmlFor="inputEmail4">First Name</label>
            <input
              value={enableEditing ? editedfirstName : firstName}
              type="text"
              className="form-control"
              placeholder="First Name"
              onChange={(e) => {
                if (enableEditing) handleEditedFirstName(e.target.value);
                else handleFirstName(e.target.value);
              }}
              aria-describedby="first name"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Last Name</label>
            <input
              value={enableEditing ? editedlastName : lastName}
              type="text"
              className="form-control"
              placeholder="Last Name"
              onChange={(e) => {
                if (enableEditing) handleEditedLastName(e.target.value);
                else handleLastName(e.target.value);
              }}
              aria-describedby="last name"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Phone Number</label>
          <input
            value={enableEditing ? editedphoneNumber : phoneNumber}
            type="tel"
            className="form-control"
            aria-describedby="phone number"
            onChange={(e) => {
              if (enableEditing) handleEditedPhoneNumber(e.target.value);
              else handlePhoneNumber(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="mt-5 btn btn-primary btn-block">
          {enableEditing ? "SAVE CHANGES" : "SUBMIT"}
        </button>
      </form>
    </div>
  );
}
