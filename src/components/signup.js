import React from 'react';
import '../App.css';

const Signup = ({ onLoginClick }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          {/* your form inputs here */}
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">
              I agree to the terms & policy
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        <div className="text-center mt-3">
          <p>Already have an account?</p>
          <button className="btn btn-link" onClick={onLoginClick}>
            Sign In
          </button>
        </div>

         <div className="text-center mt-3">
          <span>or</span>
          <div className="d-grid gap-2 mt-2">
            <button className="btn btn-outline-secondary">Sign in with Google</button>
            <button className="btn btn-outline-secondary">Sign in with Apple</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Signup;
