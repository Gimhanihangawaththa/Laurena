// 


// src/components/AdminDashboard.js
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const AdminDashboard = () => {
  const [adminName] = useState("Gimhani"); // Replace with login user later

  // Dummy users (later can fetch from backend)
  const users = [
    { id: 1, name: "Nimal", email: "nimal@example.com" },
    { id: 2, name: "Kamal", email: "kamal@example.com" },
    { id: 3, name: "Saman", email: "saman@example.com" },
  ];

  const handleAddProductClick = () => {
    // Later you can navigate to AddProduct page
    alert("Redirect to Add Product Page");
  };

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-3">Hello, Admin {adminName}</h2>
        <p className="text-muted">Welcome to your Jewelry Shop Dashboard</p>

        {/* ================= USERS SECTION ================= */}
        <h4 className="mt-4">👥 User Details</h4>
        <table className="table table-bordered mt-2">
          <thead className="table-light">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ================= ADD PRODUCT BUTTON ================= */}
        <div className="mt-4">
          <h4 className="mt-4">💎 Product Management</h4>
          <button className="btn btn-primary" onClick={handleAddProductClick}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
