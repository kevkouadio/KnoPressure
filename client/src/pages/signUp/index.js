import React, { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import API from "../../utils/API";
import { useAuth } from "../../utils/auth";
import { Form, InputGroup } from "../../components/Form";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { isLoggedIn } = useAuth();

  const history = useHistory();

  if (isLoggedIn) {
    return <Redirect to="/home" />;
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    API.signUpUser(formState.username, formState.email, formState.password)
      .then((res) => {
        // once the user has signed up
        // send them to the login page
        history.replace("/login");
      })
      .catch((err) => alert(err));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="Signup">
      <h1>Signup</h1>
      <br/>
      <Form onSubmit={handleFormSubmit}>
        <InputGroup
          id="username"
          labelText="Username"
          placeholder="yourUsername"
          name="username"
          type="text"
          onChange={handleChange}
        />
        <InputGroup
          id="email"
          labelText="Email"
          placeholder="bobsha@email.com"
          name="email"
          type="email"
          onChange={handleChange}
        />
        <InputGroup
          id="pwd"
          labelText="Password"
          placeholder="yourPassword"
          name="password"
          type="password"
          onChange={handleChange}
        />
        <button className="btn-primary" type="submit">Submit</button>
      </Form>
      <br/>
      <Link
        to="/login"
      >
        Go to Login
      </Link>
    </div>
  );
}

export default Signup;
