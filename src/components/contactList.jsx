import React, { useState } from "react";
import Checkbox from "./checkbox/index";

export default function ContactList({
  arr,
  handleViewDetails,
  handleCheckboxClick,
}) {
  const [hoverID, setHoverID] = useState("");

  return (
    <>
      <table className="table table-borderless contact-table">
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
                    className={`btn btn-primary ${
                      hoverID === id ? "" : "invisible"
                    } `}
                    onClick={() => handleViewDetails(id)}
                  >
                    View Details
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
