import React, { useState } from "react";
import "./loginPage.css";
// ── CHANGED: added Redux imports ──
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch } from "../../store/store"; // adjust path as needed
import { loginUser, selectAuth } from "../../store/authSlice"; // adjust path as needed
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, isAuthenticated } = useSelector(selectAuth);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await dispatch(loginUser({ username, password })).unwrap();
      navigate("/");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      console.log("Login successful!");
    }
  }, [isAuthenticated]);

  return (
    <div className='login-page'>
      <div className='login-image-side'>
        <img
          src='https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80'
          alt='Shopping'
          className='login-image'
        />
      </div>

      <div className='login-form-side'>
        <div className='login-form-wrapper'>
          <h1 className='login-title'>Log in to Exclusive</h1>
          <p className='login-subtitle'>Enter your details below</p>

          <form className='login-form' onSubmit={handleSubmit}>
            <div className='login-input-group'>
              <input
                type='text'
                placeholder='Username'
                className='login-input'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className='login-input-group'>
              <input
                type='password'
                placeholder='Password'
                className='login-input'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {error && <p className='login-error'>{error}</p>}

            <div className='login-actions'>
              <button type='submit' className='login-btn' disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
              </button>
              <a href='/forgot-password' className='login-forgot'>
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
