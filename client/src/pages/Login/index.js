import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth } from "../../utils/auth";
import { Form, InputGroup } from "../../components/Form";
import "./style.css"


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoggedIn, login } = useAuth();
  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();

    login(email, password)
      // navigate to the home page
      .then(() => history.push("/home"))
      .catch((err) => {
        alert(err.response.data.message);
      });
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
        <button className="btn btn-primary" type="submit">Submit</button>
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
