import React from "react";

const Logout = ({ onLogout }) => {
  const handleLogout = () => {
    // Remove user from localStorage
    localStorage.removeItem("user");

    // Notify parent component to update state
    if (onLogout) onLogout();

    alert("Logged out successfully!");
  };

  return (
    <button className="btn btn-danger" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default Logout;
