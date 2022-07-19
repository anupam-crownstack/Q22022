import "./Button.css";
import PropTypes from "prop-types";

const Button = ({ label, variant = "primary", ...props }) => {
  return (
    <button type="button" className={variant} {...props}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary", "success", "danger"]),
};

export default Button;
