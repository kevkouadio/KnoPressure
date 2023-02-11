import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { Form, Input } from "../../components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);

  const notify = () => toast.error("Incorrect email and/or password !", {
    position: "top-center",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the home page
      .then(() => history.push("/home"))
      .catch(err => notify(err))
  };

  return (
    <div className="card login-sign-Card">
      <h1>Login</h1>
      <br />
      <Form onSubmit={handleFormSubmit}>
        <div>
          <label>Email:</label>
          <Input
            id="email"
            labelText="Email"
            placeholder="name@email.com"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <Input
            id="password"
            labelText="Password"
            placeholder="password"
            name="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FontAwesomeIcon
            icon={showPassword ? faEye : faEyeSlash}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <button className="btn btn-primary" type="submit">Submit</button>
        <ToastContainer />
      </Form>
      <br />
      Don't have an account?<Link className="login-sign-link" to="/signup"> Signup</Link>
    </div>
  );
}

export default Login;
