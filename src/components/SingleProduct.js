

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";  // ✅ to read id
// import "bootstrap/dist/css/bootstrap.min.css";
// import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
// import axios from "axios";
// import "../App.css";

// const SingleProduct = () => {
//   const { id } = useParams(); // ✅ get id from route
//   const [product, setProduct] = useState(null);
//   const [editing, setEditing] = useState(false);
//   const [preview, setPreview] = useState("");

//   // Fetch product details by id
 
//   useEffect(() => {
//     axios
//       .get(`http://localhost:3005/api/product/singleview/${id}`)
//       .then((res) => {
//         setProduct(res.data);
//         setPreview(`http://localhost:3005/uploads/${res.data.image}`);
//       })
//       .catch((err) => console.error("Error fetching product:", err));
//   }, [id]);

//   if (!product) return <p className="text-center mt-5">Loading product...</p>;

//   // handle change (same as your current code)
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setProduct({ ...product, [name]: value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     const url = URL.createObjectURL(file);
//     setPreview(url);
//     setProduct({ ...product, image: file });
//   };

//   const handleSave = () => {
//     alert("Product updated successfully!");
//     setEditing(false);
//   };

//   const handleDelete = () => {
//     alert("Product deleted!");
//   };

//   return (
//     <div className="container mt-5">
//       <div className="card single-product-card p-4">
//         <div className="row align-items-center">
//           {/* Image */}
//           <div className="col-md-4 text-center">
//             <img src={preview} alt={product.productName} className="single-product-img" />
//             {editing && (
//               <div className="mt-2">
//                 <input type="file" accept="image/*" onChange={handleImageChange} className="form-control" />
//               </div>
//             )}
//           </div>

//           {/* Info */}
//           <div className="col-md-8">
//             <div className="d-flex justify-content-between align-items-center mb-2">
//               <h2 className="product-name">
//                 {editing ? (
//                   <input
//                     type="text"
//                     name="productName"
//                     value={product.productName}
//                     onChange={handleChange}
//                     className="form-control"
//                   />
//                 ) : (
//                   product.productName
//                 )}
//               </h2>

//               <div className="product-actions">
//                 {editing ? (
//                   <FaSave className="action-icon text-success" onClick={handleSave} />
//                 ) : (
//                   <FaEdit className="action-icon text-primary" onClick={() => setEditing(true)} />
//                 )}
//                 <FaTrash className="action-icon text-danger ms-2" onClick={handleDelete} />
//               </div>
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-bold">Description:</label>
//               {editing ? (
//                 <textarea
//                   name="description"
//                   value={product.description}
//                   onChange={handleChange}
//                   className="form-control"
//                   rows="3"
//                 />
//               ) : (
//                 <p>{product.description}</p>
//               )}
//             </div>

//             <div className="mb-3">
//               <label className="form-label fw-bold">Price (LKR):</label>
//               {editing ? (
//                 <input
//                   type="number"
//                   name="price"
//                   value={product.price}
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               ) : (
//                 <p>LKR {product.price}</p>
//               )}
//             </div>

//             {!editing && (
//               <button className="btn btn-primary">
//                 Add to Cart
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;



import React, { useState, useEffect } from "react";
import { useParams,useNavigate } from "react-router-dom";  // ✅ to read id
import "bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import axios from "axios";
import "../App.css";

const SingleProduct = () => {
  const { id } = useParams(); // ✅ get id from route
  const navigate = useNavigate(); 
  const [product, setProduct] = useState(null);
  const [editing, setEditing] = useState(false);
  const [preview, setPreview] = useState("");

  // Fetch product details by id
 
  useEffect(() => {
    axios
      .get(`http://localhost:3005/api/product/singleview/${id}`)
      .then((res) => {
        setProduct(res.data);
        setPreview(`http://localhost:3005/uploads/${res.data.image}`);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <p className="text-center mt-5">Loading product...</p>;

  // handle change (same as your current code)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreview(url);
    setProduct({ ...product, image: file });
  };

  const handleSave = async() => {
    try {
      const formData = new FormData();
      formData.append("productName", product.productName);
      formData.append("description", product.description);
      formData.append("price", product.price);
      if (product.image instanceof File) {
        formData.append("image", product.image);
      }

      await axios.put(`http://localhost:3005/api/product/update/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product updated successfully!");
      setEditing(false);
    } catch (err) {
      console.error("Error updating product:", err);
      alert("Failed to update product.");
    }
  };



  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      await axios.delete(`http://localhost:3005/api/product/delete/${id}`);
      alert("Product deleted successfully!");
      navigate("/"); // redirect to homepage or product list
    } catch (err) {
      console.error("Error deleting product:", err);
      alert("Failed to delete product.");
    }
  };
  return (
    <div className="container mt-5">
      <div className="card single-product-card p-4">
        <div className="row align-items-center">
          {/* Image */}
          <div className="col-md-4 text-center">
            <img src={preview} alt={product.productName} className="single-product-img" />
            {editing && (
              <div className="mt-2">
                <input type="file" accept="image/*" onChange={handleImageChange} className="form-control" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="col-md-8">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h2 className="product-name">
                {editing ? (
                  <input
                    type="text"
                    name="productName"
                    value={product.productName}
                    onChange={handleChange}
                    className="form-control"
                  />
                ) : (
                  product.productName
                )}
              </h2>

              <div className="product-actions">
                {editing ? (
                  <FaSave className="action-icon text-success" onClick={handleSave} />
                ) : (
                  <FaEdit className="action-icon text-primary" onClick={() => setEditing(true)} />
                )}
                <FaTrash className="action-icon text-danger ms-2" onClick={handleDelete} />
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

            {!editing && (
              <button className="btn btn-primary">
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;