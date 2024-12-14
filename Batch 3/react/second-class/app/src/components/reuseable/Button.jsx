/* eslint-disable react/prop-types */
import "./Button.css";
const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.btnClick}
        style={{
          backgroundColor: `${props.bgColor}`,
          color: `${props.btnColor}`,
        }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;
