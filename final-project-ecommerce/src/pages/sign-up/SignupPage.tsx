import React, {useState} from "react";
import "./signupPage.css";
import {Link} from "react-router-dom";

const SignupPage: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Login:", {email, password});
    };

    return (
        <div className='signup-page'>
            {/* Left: Image */}
            <div className='signup-image-side'>
                <img
                    src='https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80'
                    alt='Shopping'
                    className='signup-image'
                />
            </div>

            {/* Right: Form */}
            <div className='signup-form-side'>
                <div className='signup-form-wrapper'>
                    <h1 className='signup-title'>Create an account</h1>
                    <p className='signup-subtitle'>Enter your details below</p>

                    <form className='signup-form' onSubmit={handleSubmit}>
                        <div className='signup-input-group'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='signup-input'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className='signup-input-group'>
                            <input
                                type='email'
                                placeholder='Email'
                                className='signup-input'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className='signup-input-group'>
                            <input
                              type='password'
                              placeholder='Password'
                              className='signup-input'
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              required
                            />
                        </div>

                        <div className='signup-actions'>
                            <button type='submit' className='signup-btn'>
                                Log In
                            </button>
                            <div>Already have an account?
                                <Link to={'/login'} className='signup-redirect'>
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
