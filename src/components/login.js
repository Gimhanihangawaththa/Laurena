import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const navigate = useNavigate();

  const handleSignupRedirect = () => {
    navigate('/signup'); // Redirect to the Signup page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
    console.log("Login submitted");
  };

  return (
    <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="row w-100">
        <div className="col-md-6 offset-md-3 col-lg-4 offset-lg-4">
          <div className="card shadow p-4">
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
              <button className="btn btn-link" onClick={handleSignupRedirect}>
                Sign Up
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
      </div>
    </div>
  );
};

export default Login;
