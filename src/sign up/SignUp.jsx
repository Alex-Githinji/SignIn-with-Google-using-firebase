import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';
import { GoogleAuthProvider } from 'firebase/auth';
import { signInWithPopup } from 'firebase/auth';
import { auth } from '../components/firebase.js';

function SignUp() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      if (!result.user) {
        toast.success("user logged in succesfully", {
          position: "top-center",
        })
        window.location.href = "./home;"
      }
    } catch (error) {
      console.error("Error signing up with Google:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
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
              <input type="text" name="name" id="name" />
            </div>
            <div className="sign-up__container__form__input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="sign-up__container__form__input">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="sign-up__container__form__input">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" name="confirm-password" id="confirm-password" />
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
        or sign up with <a href="#" onClick={handleGoogleSignUp}>Google</a>
      </p>
    </div>
  );
}

export default SignUp;
