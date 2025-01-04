import { useSelector } from "react-redux";

const About = () => {
  const stateValue = useSelector((state) => {
    return state.myReducer.myValue;
  });
  return (
    <div>
      <h1>
        This is the about page with a current value of{" "}
        <span
          style={{
            color: "red",
          }}
        >
          {stateValue}{" "}
        </span>{" "}
      </h1>
    </div>
  );
};

export default About;
