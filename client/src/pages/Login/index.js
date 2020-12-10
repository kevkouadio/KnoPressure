import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { Form, InputGroup } from "../../components/Form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

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
      // .catch((err) => {
      //   alert(err.response.data.message);
      // });
  };

  return (
    <div >
      <h1>Login</h1>
      <Form onSubmit={handleFormSubmit}>
        <div>
        <InputGroup
          id="email"
          labelText="Email"
          placeholder="bobsha@email.com"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <div>
        <InputGroup
          id="password"
          labelText="Password"
          placeholder="yourPassword"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        </div>
        <button className="btn btn-primary" type="submit" onClick={isLoggedIn ? <Redirect to="/login" /> : notify}>Submit</button>
        <ToastContainer />
      </Form>
      <br/>
      <Link
        to="/signup"
      >
        Go to Signup
      </Link>
    </div>
  );
}

export default Login;
