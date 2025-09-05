import React, { useState, useEffect } from "react";
// import "./HomeImageHandling.css";

function HomeImageHandling() {
  const [images, setImages] = useState([]);
  const [updateId, setUpdateId] = useState(null);
  const [addForm, setAddForm] = useState({ title: "", description: "", imageFile: null });
  const [updateForm, setUpdateForm] = useState({ title: "", description: "", imageFile: null });

  // Load images from localStorage
  useEffect(() => {
    const savedImages = JSON.parse(localStorage.getItem("heroData")) || [];
    setImages(savedImages);
  }, []);

  // Save images to state and localStorage
  const saveImages = (updatedImages, message) => {
    setImages(updatedImages);
    localStorage.setItem("heroData", JSON.stringify(updatedImages));
    alert(message);
  };

  // -------------------- ADD IMAGE --------------------
  const handleAddChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setAddForm({ ...addForm, imageFile: files[0] });
    else setAddForm({ ...addForm, [name]: value });
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!addForm.imageFile) return alert("Please select an image.");

    const reader = new FileReader();
    reader.onload = () => {
      const newImage = {
        id: images.length ? images[images.length - 1].id + 1 : 1,
        title: addForm.title,
        description: addForm.description,
        image: reader.result,
      };
      saveImages([...images, newImage], "Image added successfully!");
      setAddForm({ title: "", description: "", imageFile: null });
      e.target.reset();
    };
    reader.readAsDataURL(addForm.imageFile);
  };

  // -------------------- UPDATE IMAGE --------------------
  const selectForUpdate = (img) => {
    setUpdateId(img.id);
    setUpdateForm({ title: img.title, description: img.description, imageFile: null });
  };

  const handleUpdateChange = (e) => {
    const { name, value, files } = e.target;
    if (files) setUpdateForm({ ...updateForm, imageFile: files[0] });
    else setUpdateForm({ ...updateForm, [name]: value });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    if (!updateId) return alert("Select an image to update.");

    const reader = new FileReader();
    reader.onload = () => {
      const updatedImages = images.map((img) =>
        img.id === updateId
          ? {
              ...img,
              title: updateForm.title,
              description: updateForm.description,
              image: updateForm.imageFile ? reader.result : img.image,
            }
          : img
      );
      saveImages(updatedImages, "Image updated successfully!");
      setUpdateId(null);
      setUpdateForm({ title: "", description: "", imageFile: null });
      e.target.reset();
    };

    if (updateForm.imageFile) reader.readAsDataURL(updateForm.imageFile);
    else handleUpdateSubmitNoFile();
  };

  const handleUpdateSubmitNoFile = () => {
    const updatedImages = images.map((img) =>
      img.id === updateId ? { ...img, title: updateForm.title, description: updateForm.description } : img
    );
    saveImages(updatedImages, "Image updated successfully!");
    setUpdateId(null);
    setUpdateForm({ title: "", description: "", imageFile: null });
  };

  // -------------------- DELETE IMAGE --------------------
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this image?")) {
      const updatedImages = images.filter((img) => img.id !== id);
      saveImages(updatedImages, "Image deleted successfully!");
    }
  };

  return (
    <div className="container">
      <h2>Home Image Handling</h2>

      {/* -------------------- ADD IMAGE -------------------- */}
      <section className="section">
        <h3>Add New Image</h3>
        <form onSubmit={handleAddSubmit}>
          <input type="file" name="image" onChange={handleAddChange} required />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={addForm.title}
            onChange={handleAddChange}
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={addForm.description}
            onChange={handleAddChange}
          />
          <button type="submit">Add Image</button>
        </form>
      </section>

      {/* -------------------- UPDATE IMAGE -------------------- */}
      <section className="section">
        <h3>Update Existing Image</h3>
        {updateId && (
          <form onSubmit={handleUpdateSubmit}>
            <input type="file" name="image" onChange={handleUpdateChange} />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={updateForm.title}
              onChange={handleUpdateChange}
              required
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={updateForm.description}
              onChange={handleUpdateChange}
            />
            <button type="submit">Update Image</button>
          </form>
        )}
        {!updateId && <p>Select an image below to edit.</p>}
      </section>

      {/* -------------------- DELETE IMAGE -------------------- */}
      <section className="section">
        <h3>Existing Images</h3>
        <div className="image-grid">
          {images.map((img) => (
            <div className="image-card" key={img.id}>
              <img src={img.image} alt={img.title} />
              <h4>{img.title}</h4>
              <p>{img.description}</p>
              <div className="btn-group">
                <button className="btn btn-edit" onClick={() => selectForUpdate(img)}>
                  Edit
                </button>
                <button className="btn btn-delete" onClick={() => handleDelete(img.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomeImageHandling;
