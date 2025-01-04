import "./Features.css";
import { useState } from "react";
import Button from "../../components/reuseable/Button";
import { useSelector, useDispatch } from "react-redux";
import { increament } from "../../services/Action";

const Features = () => {
  const dispatch = useDispatch();

  const stateUserName = useSelector((state) => {
    return state.myReducer.userName;
  });

  const stateValue = useSelector((state) => state.myReducer.myValue);

  const increamentState = () => {
    dispatch(increament());
    alert(`5 Added to state and state value is ${stateValue + 5}`);
  };

  const [myName] = useState("Benson");
  const [counter, setCounter] = useState(0);

  console.log(stateUserName);

  const increaseCount = () => {
    setCounter(counter + 2);
  };

  const decreaseCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="FeatureContainer">
      <button onClick={increamentState}>Add 5 To State Value</button>
      <h1>
        My name is {stateUserName} {myName}{" "}
      </h1>
      <h2>This is {stateUserName} Counter Application</h2>
      <h1>
        Current Count for {stateUserName}: {counter}
      </h1>

      <button onClick={increaseCount}>Increase</button>
      {/* <Button
        title="Increase"
        bgColor="green"
        btnColor="white"
      /> */}
      <br />
      <Button
        title="Decrease"
        bgColor="red"
        btnColor="white"
        btnClick={decreaseCount}
      />
    </div>
  );
};

export default Features;
