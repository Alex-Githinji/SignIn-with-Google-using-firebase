import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import { GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../components/firebase.js';
// import toast from 'react-toastify'; // Ensure toast library is installed and imported correctly

function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const provider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      if (result.user) {
        // toast.success("User logged in successfully", {
        //   position: "top-center",
        // });
        window.location.href = "/home";
      }
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const result = await signInWithPopup(auth, facebookProvider);
      console.log(result);
      if (result.user) {
        // toast.success("User logged in successfully", {
        //   position: "top-center",
        // });
        window.location.href = "/home";
      }
    } catch (error) {
      console.error("Error signing up with Facebook:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="sign-up">
      <div className="sign-up__container">
        <div className="sign-up__container__title">
          <h1>Sign Up</h1>
        </div>
        <div className="sign-up__container__form">
          <form onSubmit={handleSubmit}>
            <div className="sign-up__container__form__input">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="sign-up__container__form__input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="sign-up__container__form__input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="sign-up__container__form__input">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                id="confirm-password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="login-link">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
      <p>
        or sign up with <br />
        <button onClick={handleGoogleSignUp}>Google</button>
      </p>
      <button onClick={handleFacebookSignup}>Facebook</button>
    </div>
  );
}

export default SignUp;
