import React, { useState } from "react"
import axios from "axios"

const Login = ({ login }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [incorrect, setIncorrect] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault()
    axios.get("/api/login/", {
      params: {
        username: username,
        password: password
      }})
      .then(response => {
        if (response.data.success) {
          login(response.data.user.username)
        }
        else {
          setIncorrect(true)
        }
        console.log(response.data)
      })
      .catch(err => {
        console.error(err)
      })
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
  )
}

export default Login
