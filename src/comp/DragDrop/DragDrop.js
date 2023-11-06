import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPG", "PNG", "JPEG"];

function DragDrop() {
  const [file, setFile] = useState(null);
  const handleChange = (file) => {
    setFile(file);
  };
  console.log(file)
  return (
    <FileUploader handleChange={handleChange} name="file" types={fileTypes} multiple={false} label="Chose your profile pic"/>
  );
}

export default DragDrop;