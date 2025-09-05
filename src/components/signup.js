import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import axios from 'axios';

const Signup = ({ onLoginClick }) => {
  
  const navigate = useNavigate();
  // State for inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const sendData = (e) => {
    e.preventDefault();
    setLoading(true);

    const newUser = {
      name,
      email_address: email, // match backend key
      password,
    };

    axios.post("http://localhost:3005/api/user/add", newUser)
      .then(() => {
        alert("User Added Successfully!");
        // Reset form
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.error(err);
        alert(err);
      })
      .finally(() => setLoading(false));
      navigate("/login");

  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Create Account</h2>
        <form onSubmit={sendData}>
          {/* Name */}
          <div className="form-group mb-3">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div className="form-group mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="form-group mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Terms */}
          <div className="form-check mb-3">
            <input type="checkbox" className="form-check-input" id="terms" required />
            <label className="form-check-label" htmlFor="terms">
              I agree to the terms & policy
            </label>
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
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
