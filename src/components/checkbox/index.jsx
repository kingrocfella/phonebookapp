import React from "react";
import PropTypes from "prop-types";
import "./styles.css";

const CheckboxComponent = ({
  id,
  value,
  handleCheckboxChange,
  disabled = false
}) => {
  return (
    <div className="check-container">
      <input
        type="checkbox"
        id={id}
        onChange={handleCheckboxChange}
        checked={value}
        disabled={disabled}
      />
      <span className="checkmark" onClick={handleCheckboxChange}></span>
    </div>
  );
};

CheckboxComponent.propTypes = {
  id: PropTypes.any.isRequired,
  value: PropTypes.bool.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool
};

export default CheckboxComponent;
