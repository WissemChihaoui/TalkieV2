import React, { useState } from "react";

const DragDropImage = ({ onImagesChange }) => {
  const [selectedImages, setSelectedImages] = useState([]);

  const handleFileChange = (e) => {
    const files = e.target.files;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setSelectedImages((prevImages) => [...prevImages, ...newImages]);

    // Pass the selected images to the parent component
    onImagesChange((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();

    const files = e.dataTransfer.files;

    const newImages = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setSelectedImages((prevImages) => [...prevImages, ...newImages]);

    // Pass the selected images to the parent component
    onImagesChange((prevImages) => [...prevImages, ...newImages]);
  };

  return (
    <div
      className="flex items-center justify-center w-full"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-card dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-hover dark:border-gray-600 dark:hover:border-secondary dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-secondary dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-secondary dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-secondary dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple
        />
      </label>
    </div>
  );
};

export default DragDropImage;
