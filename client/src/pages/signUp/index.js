import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";
import { Form, Input } from "../../components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/Sipnner";
import "./style.css";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "", // Added confirmPassword state
  });

  const [showPassword, setShowPassword] = useState(false);
  const { isLoggedIn } = useAuth();
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  const notifyError = (message) => toast.error(message, {
    position: "top-center",
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  const notifySuccess = () => toast.success("Congratulations! Your account has been created. Please log in and start using our service. Thank you for choosing our platform. 😊", {
    position: "top-center",
    autoClose: 7000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (formState.password !== formState.confirmPassword) {
      return notifyError("Passwords do not match!");
    }
    setLoading(true); // Start loading
    try {
      await API.signUpUser(formState.username, formState.email, formState.password);
      notifySuccess();
      setTimeout(() => history.replace("/login"), 7500); // Redirect after success message
    } catch (err) {
      notifyError("ERROR!!! Invalid input field or account already exists!");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="card login-sign-Card">
      <h1>Signup</h1>
      <br />
      {isLoading && <Spinner />} {/* Display Spinner while loading */}
      <Form onSubmit={handleFormSubmit}>
        <div>
          <label>Name:</label>
          <Input
            id="username"
            labelText="Username"
            placeholder="Your name"
            name="username"
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <Input
            id="email"
            labelText="Email"
            placeholder="name@email.com"
            name="email"
            type="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <Input
            id="pwd"
            labelText="Password"
            placeholder="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <Input
            id="confirmPwd"
            labelText="Confirm Password"
            placeholder="Confirm Password"
            name="confirmPassword"
            type={showPassword ? "text" : "password"}
            onChange={handleChange}
          />
          <FontAwesomeIcon
            id="signUp-icon"
            icon={showPassword ? faEye : faEyeSlash}
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <button className="btn btn-primary" type="submit" disabled={isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
        <ToastContainer />
      </Form>
      <br />
      Already have an account? <Link className="login-sign-link" to="/login">Login</Link>
    </div>
  );
}

export default Signup;
