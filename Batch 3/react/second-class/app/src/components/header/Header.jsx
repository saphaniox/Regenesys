import Button from "../reuseable/Button";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerContaine">
      <section className="logoNav">
        <Link to="/">
          <img src="./logo.svg" alt="" />
        </Link>
        <main className="navs">
          <Link to="/my-feature">
            <nav>Features</nav>
          </Link>
          <nav>Company</nav>
          <Link to="/careers">
            <nav>Career </nav>
          </Link>
          <Link to="/about">
            <nav>About</nav>
          </Link>
        </main>
      </section>
      <section className="btns">
        <nav>Login</nav>
        <Button title="Register" />
      </section>
    </div>
  );
};

export default Header;
