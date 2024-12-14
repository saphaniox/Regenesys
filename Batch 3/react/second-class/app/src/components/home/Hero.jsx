import Button from "../reuseable/Button";
import imgHero from "../../assets/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="heroContainer">
      <section className="heroTextContainer">
        <h1>Make Remote Work</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          maxime id, harum aliquam dicta cumque debitis sit facere mollitia
          ipsam rejjjjzpudiandae beatae quod cum illum a placeat. Facilis, atque
          commodi?
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
