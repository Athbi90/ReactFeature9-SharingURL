import { AuthButtonbStyled } from "../../styles";
import { Link } from "react-router-dom";

const SigninButton = () => {
  return (
    <Link to="/signin">
      <AuthButtonbStyled>Sign In</AuthButtonbStyled>
    </Link>
  );
};

export default SigninButton;
