import React from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
/**
 * Composant button html
 * @param {object} props props du composant
 * @returns component render
 */

const Button = (props) => {
  console.log(props);
  return (
    <button
      className={style.Button}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style,
      }}
      onClick={(evt) => props.onButtonClicked()}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  style: PropTypes.object,
};
Button.defaultProps = {
  bgColor: "yellowgreen",
  color: "white",
};
export default Button;
