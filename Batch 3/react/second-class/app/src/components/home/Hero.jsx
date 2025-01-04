import Button from "../reuseable/Button";
import imgHero from "../../assets/hero.png";
import "./Hero.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const countValue = useSelector((state) => {
    return state.myReducer.myValue;
  });

  const stateUserName = useSelector((state) => state.myReducer.userName);

  console.log(countValue);
  console.log(stateUserName);
  return (
    <div className="heroContainer">
      <section className="heroTextContainer">
        <h1>
          Make Remote Work <i> {stateUserName} </i> {countValue}{" "}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          maxime id, harum aliquam dicta cumque debitis sit facere mollitia
          ipsam rejjjjzpudiandae beatae quod cum illum a placeat. Facilis, atque
          commodi? {stateUserName}
        </p>
        <Button title="Learn More" bgColor="#000" btnColor="#fff" />
      </section>
      <section className="heroImagContainer">
        <img src={imgHero} alt="" />
      </section>
    </div>
  );
};

export default Hero;
