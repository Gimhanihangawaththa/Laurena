import React from 'react';
import '../App.css'; 

const Login = ({ onSignupClick }) => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Get Started Now</h2>
        <form onSubmit={handleSubmit}>
          {/* your form inputs here */}
                 <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" id="name" placeholder="Enter your name" required />
          </div>
         
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
          </div>
        
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>

        <div className="text-center mt-3">
          <p>Don't Have an account?</p>
          <button className="btn btn-link" onClick={onSignupClick}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
