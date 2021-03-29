import { AuthButtonbStyled } from "../../styles";
import { Link } from "react-router-dom";

const SignupButton = () => {
  return (
    <Link to="/signup">
      <AuthButtonbStyled>Sign Up</AuthButtonbStyled>
    </Link>
  );
};

export default SignupButton;
