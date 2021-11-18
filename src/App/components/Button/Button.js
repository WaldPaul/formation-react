import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
/**
 * Composant button html
 * @param {object} props props du composant
 * @returns component render
 */

const Button = (props) => {
  const [clicked, setClicked] = useState({state:false, autreValue:'Demat la Bretagne'})
  useEffect(() => {
    console.log()
    setTimeout(()=>{
        setClicked({...clicked, state:false});
      },300)
//    return la fonction de "willunmount"
//    return () => {
//      cleanup
//    }
  }, [clicked])
  console.log(props);
  return (
    <button
      className={`${style.Button}${clicked.state?' '+style.clicked:''}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style,
      }}
      onClick={(evt) => {
        setClicked({...clicked, state:true})
        
        props.onButtonClicked()
      }}
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
