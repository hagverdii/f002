import React, { useState } from "react";
import "./loginPage.css";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { email, password });
  };

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
                type='email'
                placeholder='Email'
                className='login-input'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <div className='login-actions'>
              <button type='submit' className='login-btn'>
                Log In
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
