import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username,
          password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("username", data.username);
            navigate("/");
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='login-container'>
      <form className='login-form' onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label>
          Username
          <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} required />
        </label>

        <label>
          Password
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
}
