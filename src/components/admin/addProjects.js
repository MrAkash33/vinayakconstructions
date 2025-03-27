"use client"; // Ensures it's a Client Component
import { useState } from "react";
import Image from "next/image";
import axios from "axios";

const AdminImageModal = ({ isOpen, onClose }) => {
  const [file, setFile] = useState(null);
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };
  const handleUpload = async () => {
    if (!file || !heading || !description) {
      alert("Please fill all fields");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
      const base64File = reader.result.split(",")[1]; // Get Base64 without metadata

      const filename = `${Date.now()}-${file.name}`;
      // console.log("base64File",base64File)
      try {
        const response = await axios.post("/api/addProject", {
          file: base64File,
          filename,
          heading,
          description,
        });

        console.log("Upload success:", response.data);
        onClose()
        alert("Image uploaded successfully!");
      } catch (error) {
        console.error("Upload error:", error.response.data);
        alert(`Upload failed! ${error.response.data}`);
      }
    };
  };
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-sm relative">
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
        >
          ✖
        </button>
        <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">Upload Projects</h2>
          <input type="file" accept="image/*" onChange={handleFileChange} className="mb-2 border p-2 w-full" required/>
          <input type="text" placeholder="Enter heading" value={heading} onChange={(e) => setHeading(e.target.value)} className="mb-2 border p-2 w-full" required/>
          <textarea placeholder="Enter description" value={description} onChange={(e) => setDescription(e.target.value)} className="mb-2 border p-2 w-full" required/>
          <button onClick={handleUpload} className="bg-blue-500 text-white p-2 rounded w-full">Upload</button>
        </div>
      </div>
    </div>
  );
};

export default AdminImageModal;
