// 


// src/components/AdminDashboard.js
// 

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
// import '../App.css';



const AdminDashboard = () => {
  const [adminName] = useState("Gimhani"); // Replace with login user later
const navigate = useNavigate();
  // Dummy users (later can fetch from backend)


  const handleAddProductClick = () => {
   navigate('/addproduct');
    
  };


   const handleHomeImageClick = () => {
    navigate("/homeimages"); // New route for home page images
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-3">Hello, Admin {adminName}</h2>
        <p className="text-muted">Welcome to your Jewelry Shop Dashboard</p>

       
        {/* ================= ADD PRODUCT BUTTON ================= */}
        <div className="mt-4">
          <h4 className="mt-4">💎 Product Management</h4>
          <button className="btn btn-primary" onClick={handleAddProductClick}>
            Add Product
          </button>
        </div>

         <div className="mt-4">
          <h4 className="mt-4">🖼️ Home Page Images</h4>
          <button className="btn btn-success" onClick={handleHomeImageClick}>
            Manage Home Images
          </button>
        </div>

      </div>
    </div>
  );
};

export default AdminDashboard;
