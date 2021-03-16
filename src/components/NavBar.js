// Styling
import { ThemeButton, Logo } from "../styles";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.jpg";

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
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
