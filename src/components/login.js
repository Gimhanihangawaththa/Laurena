// // import React from 'react';
// // import '../App.css'; 

// // const Login = ({ onSignupClick }) => {

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log("Login submitted");
// //   };



// //   return (
// //     <div className="login-container">
// //       <div className="login-card">
// //         <h2 className="text-center mb-4">Get Started Now</h2>
// //         <form onSubmit={handleSubmit}>
         
// //                  <div className="form-group mb-3">
// //             <label htmlFor="name">Name</label>
// //             <input type="text" className="form-control" id="name" placeholder="Enter your name" required
           
// //             />
// //           </div>
         
// //           <div className="form-group mb-3">
// //             <label htmlFor="password">Password</label>
// //             <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
// //           </div>
        
// //           <button type="submit" className="btn btn-primary w-100">Login</button>
// //         </form>

// //         <div className="text-center mt-3">
// //           <p>Don't Have an account?</p>
// //           <button className="btn btn-link" onClick={onSignupClick}>
// //             Sign Up
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;



// import React from 'react';
// import '../App.css'; 
// // import { useNavigate } from "react-router-dom";

// const Login = ({ onSignupClick }) => {

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Login submitted");
//   };



//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2 className="text-center mb-4">Get Started Now</h2>
//         <form onSubmit={handleSubmit}>
         
//                  <div className="form-group mb-3">
//             <label htmlFor="name">Name</label>
//             <input type="text" className="form-control" id="name" placeholder="Enter your name" required
           
//             />
//           </div>
         
//           <div className="form-group mb-3">
//             <label htmlFor="password">Password</label>
//             <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
//           </div>
        
//           <button type="submit" className="btn btn-primary w-100">Login</button>
//         </form>

//         <div className="text-center mt-3">
//           <p>Don't Have an account?</p>
//           <button className="btn btn-link" onClick={onSignupClick}>
//             Sign Up
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = ({  onSuccess,onSignupClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:3005/api/user/login", {
        email_address: email,
        password,
      })
      .then((res) => {
        alert(res.data.message);
        // console.log("Logged in user:", res.data.user);

        // Optionally save user in localStorage/session
        localStorage.setItem("user", JSON.stringify(res.data.user));
        onSuccess(res.data.user);

        //  onSuccess();
        //  navigate("/");
        // Reset form
        setEmail("");
        setPassword("");
      })
      .catch((err) => {
        console.error(err);
        alert(
          err.response?.data?.message || "Login failed, please try again."
        );
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="text-center mb-4">Sign In</h2>
        <form onSubmit={loginUser}>
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

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <div className="text-center mt-3">
          <p>Don’t have an account?</p>
          <button className="btn btn-link" onClick={onSignupClick}>
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
