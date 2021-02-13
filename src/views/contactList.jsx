import React, { useState } from "react";
import Checkbox from "../components/Checkbox";
import { BsFillEyeFill } from "react-icons/bs";
import PropTypes from "prop-types";

function ContactList({ arr, handleViewDetails, handleCheckboxClick }) {
  const [hoverID, setHoverID] = useState("");

  return (
    <>
      <table className="table table-borderless contact-table text-white pt-5">
        <tbody>
          {arr.map(({ firstName, lastName, id, check }) => (
            <tr
              key={id}
              className={`cursor ${hoverID === id ? "hovered-row" : ""}`}
              onMouseEnter={() => setHoverID(id)}
              onMouseLeave={() => setHoverID("")}
            >
              <td className="display-center-end pt-4">
                <Checkbox
                  id={id}
                  value={check}
                  handleCheckboxChange={() => handleCheckboxClick(id)}
                />
              </td>
              <td onClick={() => handleViewDetails(id)}>
                <div className="display-vertical-center">
                  <div className="user-avatar display-center">{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</div>
                  <div className="display-vertical-center pl-4">{`${firstName} ${lastName}`}</div>
                </div>
              </td>
              <td>
                <div className="display-end">
                  <button
                    className={`btn primary-button ${
                      hoverID === id ? "" : "invisible"
                    } `}
                    onClick={() => handleViewDetails(id)}
                    type="button"
                  >
                    <BsFillEyeFill /> &nbsp; View Details
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

ContactList.propTypes = {
  handleViewDetails: PropTypes.func.isRequired,
  handleCheckboxClick: PropTypes.func.isRequired,
  arr: PropTypes.array.isRequired,
};

export default ContactList;
