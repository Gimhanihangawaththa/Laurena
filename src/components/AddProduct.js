// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import '../App.css';

// const AddProduct = () => {
//   const [productName, setProductName] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);

//   // Handle Image Upload Preview
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImage(file);
//     setPreview(URL.createObjectURL(file));
//   };

//   // Handle Form Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!productName || !description || !price || !image) {
//       alert("Please fill in all fields and upload an image!");
//       return;
//     }

//     // For now just show data (later connect to backend)
//     console.log({
//       productName,
//       description,
//       price,
//       image,
//     });

//     alert("Product Added Successfully!");

//     // Reset form
//     setProductName("");
//     setDescription("");
//     setPrice("");
//     setImage(null);
//     setPreview(null);
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card add-product-card p-4">
//         <h2 className="mb-3">Add New Product</h2>
//         <form onSubmit={handleSubmit}>
//           {/* Product Name */}
//           <div className="mb-3">
//             <label className="form-label">Product Name</label>
//             <input
//               type="text"
//               className="form-control"
//               value={productName}
//               onChange={(e) => setProductName(e.target.value)}
//               placeholder="Enter product name"
//             />
//           </div>

//           {/* Description */}
//           <div className="mb-3">
//             <label className="form-label">Description</label>
//             <textarea
//               className="form-control"
//               rows="3"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//               placeholder="Enter product description"
//             ></textarea>
//           </div>

//           {/* Price */}
//           <div className="mb-3">
//             <label className="form-label">Price (LKR)</label>
//             <input
//               type="number"
//               className="form-control"
//               value={price}
//               onChange={(e) => setPrice(e.target.value)}
//               placeholder="Enter price"
//             />
//           </div>

//           {/* Image Upload */}
//           <div className="mb-3">
//             <label className="form-label">Upload Image</label>
//             <input
//               type="file"
//               className="form-control"
//               accept="image/*"
//               onChange={handleImageChange}
//             />
//           </div>

//           {/* Image Preview */}
//           {preview && (
//             <div className="mb-3 text-center">
//               <img
//                 src={preview}
//                 alt="preview"
//                 className="img-preview"
//               />
//             </div>
//           )}

//           {/* Submit */}
//           <button type="submit" className="btn btn-success">
//             Add Product
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddProduct;


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios"; 
import '../App.css';

const AddProduct = () => {
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle Image Upload Preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // Handle Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !description || !price || !image) {
      alert("Please fill in all fields and upload an image!");
      return;
    }

    setLoading(true);

    try {
      // Prepare form data
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("image", image);

      // Send to backend
      await axios.post("http://localhost:3005/api/product/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product Added Successfully!");

      // Reset form
      setProductName("");
      setDescription("");
      setPrice("");
      setImage(null);
      setPreview(null);
    } catch (error) {
      console.error(error);
      alert("Error adding product. Please try again.");
    } finally {
      setLoading(false);
    }
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
              required
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
              required
            ></textarea>
          </div>

          {/* Price */}
          <div className="mb-3">
            <label className="form-label">Price ($)</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Enter price"
              required
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
              required
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
          <button type="submit" className="btn btn-success" disabled={loading}>
            {loading ? "Adding Product..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

