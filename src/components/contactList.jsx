import React from "react";

export default function ContactList({
  arr,
  handleViewDetails,
  handleCheckboxClick,
}) {
  return (
    <table
      style={{ borderSpacing: "2rem", borderCollapse: "separate" }}
      className="table table-borderless"
    >
      <tbody title="Click to view details">
        {arr.map(({ firstName, lastName, id, check }) => (
          <tr key={id} className="cursor">
            <td>
              <input
                type="checkbox"
                onChange={() => handleCheckboxClick(id)}
                value={check}
              />
            </td>
            <td
              className="user-avatar text-center"
              onClick={() => handleViewDetails(id)}
            >{`${firstName[0].toUpperCase()}${lastName[0].toUpperCase()}`}</td>
            <td
              className="pl-3"
              onClick={() => handleViewDetails(id)}
            >{`${firstName} ${lastName}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
