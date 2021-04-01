// Styling
import { ThemeButton, Logo } from "../styles";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import logo from "../components/images/logo.jpg";
import SignupButton from "./buttons/SignupButton";
import SigninButton from "./buttons/SigninButton";
import authStore from "../stores/AuthStore";
import { FiLogOut } from "react-icons/fi";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Link to="/">
        <Logo src={logo} />
      </Link>

      <div className="navbar-nav ml-auto">
        <Link to="/products">
          <a className="nav-item" style={{ padding: "0.25em 1em" }}>
            Products
          </a>
        </Link>
        {authStore.user ? (
          <>
            <p>Hello {authStore.user.username}</p>
            <FiLogOut onClick={authStore.signout} size="2em" color="red" />{" "}
          </>
        ) : (
          <>
            <SignupButton />
            <SigninButton />
          </>
        )}

        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default observer(NavBar);
