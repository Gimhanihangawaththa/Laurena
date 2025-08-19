import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Signup = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/login'); // Redirect to the Login page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log("Signup submitted");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3">
            <label htmlFor="signup-name">Name</label>
            <input type="text" className="form-control" id="signup-name" placeholder="Enter your name" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="signup-email">Email address</label>
            <input type="email" className="form-control" id="signup-email" placeholder="Enter your email" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="signup-password">Password</label>
            <input type="password" className="form-control" id="signup-password" placeholder="Enter your password" required />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="signup-confirm-password">Confirm Password</label>
            <input type="password" className="form-control" id="signup-confirm-password" placeholder="Confirm your password" required />
          </div>
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="signup-terms" required />
            <label className="form-check-label" htmlFor="signup-terms">
              I agree to the terms & policy
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Sign Up</button>
        </form>

        <div className="text-center mt-3">
          <p>Already have an account?</p>
          <button className="btn btn-link" onClick={handleLoginRedirect}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;