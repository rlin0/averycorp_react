import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(localStorage.getItem("username"));
  const [incorrect, setIncorrect] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    axios.get("/api/login/", {
      params: {
        username: username,
        password: password
      }})
      .then(response => {
        if (response.data.success) {
          // set the state of the user
          console.log(response.data.user)
          setLoggedInUser(response.data.user.username)
          // store the user in localStorage
          localStorage.setItem('username', username)

        }
        else {
          setIncorrect(true)
        }
        console.log(response.data)
      })
      .catch(err => {
        console.error(err)
      });
  };

  const handleLogout = () => {
    setUsername("");
    setPassword("");
    setLoggedInUser(null);
    setIncorrect(false);
    localStorage.clear();
  };

  // if there's a user show the message below
  if (loggedInUser !== null) {
    return (
      <div>
        <div>{loggedInUser} is logged in</div>
        <button onClick={handleLogout}>logout</button>
      </div>
    )
  }

  // if there's no user, show the login form
  return (
    <form onSubmit={handleSubmit}>
      <div>{incorrect && <p>Incorrect login!</p>}</div>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
