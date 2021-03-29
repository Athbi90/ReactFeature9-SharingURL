// Styling
import { ThemeButton, Logo } from "../styles";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.jpg";
import SignupButton from "./buttons/SignupButton";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <div className="navbar-nav ml-auto">
        <a className="nav-item" style={{ padding: "0.25em 1em" }}>
          Products
        </a>
        <SignupButton />
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default observer(NavBar);
