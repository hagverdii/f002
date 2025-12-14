import React from "react";
import "./registrationForm.css";
import { useState } from "react";

const RegistrationForm = () => {
  const [surnameInput, setSurnameInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateForm = () => {
    if (!surnameInput) return false;
    if (!nameInput) return false;
    if (!emailInput) return false;
    if (!passwordInput) return false;
    return true;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) alert("Correct");
    else alert("Wrong");
  };
  return (
    <form className='registration-form' onSubmit={submitForm}>
      <input
        required
        type='text'
        placeholder='Soyad'
        value={surnameInput}
        onChange={(e) => setSurnameInput(e.target.value)}
      />
      {!surnameInput && <p className='invalid-validation-text'>Soyad Yerini Doldurun!</p>}

      <input
        required
        type='text'
        placeholder='Ad'
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />
      {!nameInput && <p className='invalid-validation-text'>Ad Yerini Doldurun!</p>}

      <input
        required
        type='email'
        placeholder='Email'
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />
      {!emailInput && <p className='invalid-validation-text'>Email Yerini Doldurun!</p>}

      <input
        required
        type={showPassword ? "text" : "password"}
        placeholder='Parol'
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      {!passwordInput && <p className='invalid-validation-text'>Parol Yerini Doldurun!</p>}

      <div className='showPasswordDiv'>
        <label htmlFor=''>Parola bax</label>
        <input type='checkbox' value={showPassword} onChange={(e) => setShowPassword(e.target.checked)} />
      </div>
      <button type='submit'>Submit</button>
    </form>
  );
};

export default RegistrationForm;
