import "./Features.css";
import { useState } from "react";
import Button from "../../components/reuseable/Button";

const Features = () => {
  const [myName] = useState("Benson");
  const [counter, setCounter] = useState(0);

  const increaseCount = () => {
    setCounter(counter + 2);
  };

  const decreaseCount = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="FeatureContainer">
      <h1>My name is {myName}</h1>
      <h2>This is mY Counter Application</h2>
      <h1>Current Count: {counter}</h1>

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
