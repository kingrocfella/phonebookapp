import ReactTelephoneInput from "react-phone-input-2";
import PropTypes from "prop-types";

function PhonenumberField({
  handleChange,
  disabled = false,
  countryCode = "ng",
  value,
}) {
  return (
    <ReactTelephoneInput
      disabled={disabled}
      country={countryCode}
      enableSearch={true}
      onChange={handleChange}
      countryCodeEditable={false}
      inputClass="form-control"
      inputStyle={{ width: "100%" }}
      value={value}
    />
  );
}

PhonenumberField.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  countryCode: PropTypes.string,
};

export default PhonenumberField;
