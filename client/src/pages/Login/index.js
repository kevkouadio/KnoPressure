import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { Form, Input } from "../../components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/Sipnner";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const notify = () => toast.error("Incorrect email and/or password!", {
    position: "top-center",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    try {
      await login(email, password);
      history.push("/home"); // Navigate to the home page after successful login
    } catch (err) {
      notify(err);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="card login-sign-Card">
      <h1>Login</h1>
      <br />
      {isLoading && <Spinner />} {/* Display Spinner while loading */}
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
        <button className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
        <ToastContainer />
      </Form>
      <br />
      <Link className="login-sign-link" to="/forgotPassword"> Forgot Password</Link>
      <br />
      Don't have an account?<Link className="login-sign-link" to="/signup"> Signup</Link>
    </div>
  );
}

export default Login;
