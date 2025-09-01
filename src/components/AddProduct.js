import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../App.css';

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  // Handle Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!productName || !description || !price || !image) {
      alert("Please fill in all fields and upload an image!");
      return;
    }

    // For now just show data (later connect to backend)
    console.log({
      productName,
      description,
      price,
      image,
    });

    alert("Product Added Successfully!");

    // Reset form
    setProductName("");
    setDescription("");
    setPrice("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="container mt-5">
      <div className="card add-product-card p-4">
        <h2 className="mb-3">Add New Product</h2>
        <form onSubmit={handleSubmit}>
          {/* Product Name */}
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input
              type="text"
              className="form-control"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              placeholder="Enter product name"
            />
          </div>

          {/* Description */}
          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter product description"
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price (LKR)</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
            />
          </div>

          {/* Image Upload */}
          <div className="mb-3">
            <label className="form-label">Upload Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>

          {/* Image Preview */}
          {preview && (
            <div className="mb-3 text-center">
              <img
                src={preview}
                alt="preview"
                className="img-preview"
              />
            </div>
          )}

          {/* Submit */}
          <button type="submit" className="btn btn-success">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
