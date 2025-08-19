import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../App.css'; // Make sure this is imported
import { Link } from 'react-router-dom';
const Login = () => {
  // const navigate = useNavigate();

  // const handleSignupRedirect = () => {
  //   navigate('/signup'); // Redirect to the Signup page
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login submitted");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Get Started Now</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-primary w-100">Sign in</button>
        </form>

        <div className="text-center mt-3">
          <p>Don’t have an account?</p>
           <Link to="/signup" className="btn btn-link">
    Sign Up
  </Link>
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

export default Login;