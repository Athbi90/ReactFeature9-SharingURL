import { useState } from "react";
import authStore from "../stores/AuthStore";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    authStore.signup(user);
    event.target.reset();
  };
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  return (
    <div>
      <h3>Signup</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
