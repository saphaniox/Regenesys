/* eslint-disable react/prop-types */
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button
        style={{
          backgroundColor: `${props.bgColor}`,
        }}
      >
        {" "}
        {props.title}{" "}
      </button>
      <small> Are you sure you want to {props.samllTitle} </small>
    </div>
  );
};

export default Button;
