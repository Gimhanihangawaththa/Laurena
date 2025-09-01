import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";


const SingleProduct = ({ productData }) => {
  // Sample product data if none passed
  const defaultProduct = {
    name: "Golden Ring",
    description: "Elegant 18k gold ring for special occasions.",
    price: 45000,
    image: "https://via.placeholder.com/300x300.png?text=Product+Image",
  };

  const [product, setProduct] = useState(productData || defaultProduct);
  const [editing, setEditing] = useState(false);
  const [preview, setPreview] = useState(product.image);

  // Handle inline edits
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setProduct({ ...product, image: file }); // Store file for backend later
  };

  // Save updates (for now just local state)
  const handleSave = () => {
    alert("Product updated successfully!");
    setEditing(false);
  };

  // Delete product
  const handleDelete = () => {
    alert("Product deleted!");
    // Later remove from DB or list
  };

  return (
    <div className="container mt-5">
      <div className="card single-product-card p-4">
        <div className="row align-items-center">
          {/* Image Section */}
          <div className="col-md-4 text-center">
            <img src={preview} alt={product.name} className="single-product-img" />
            {editing && (
              <div className="mt-2">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="form-control"
                />
              </div>
            )}
          </div>

          {/* Product Info Section */}
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h2 className="product-name">
                {editing ? (
                  <input
                    type="text"
                    name="name"
                    value={product.name}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  product.name
                )}
              </h2>

              <div className="product-actions">
                {editing ? (
                  <FaSave
                    className="action-icon text-success"
                    onClick={handleSave}
                  />
                ) : (
                  <FaEdit
                    className="action-icon text-primary"
                    onClick={() => setEditing(true)}
                  />
                )}
                <FaTrash
                  className="action-icon text-danger ms-2"
                  onClick={handleDelete}
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Description:</label>
              {editing ? (
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  className="form-control"
                  rows="3"
                />
              ) : (
                <p>{product.description}</p>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Price (LKR):</label>
              {editing ? (
                <input
                  type="number"
                  name="price"
                  value={product.price}
                  onChange={handleChange}
                  className="form-control"
                />
              ) : (
                <p>LKR {product.price}</p>
              )}
            </div>

            {/* Optional Add to Cart */}
            {!editing && (
              <button className="btn btn-primary">
                <FaEdit className="me-2" /> Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
