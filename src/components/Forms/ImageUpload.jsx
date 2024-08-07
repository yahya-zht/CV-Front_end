"use client";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import Image from "next/image";
const ImageUpload = () => {
  const [uploadedImage, setUploadedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      setUploadedImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div>
      <div {...getRootProps()} className="upload-zone">
        <input {...getInputProps()} />
        <p>Drag 'n' drop an image here, or click to select one</p>
      </div>
      {uploadedImage && (
        <div className="image-preview">
          <Image
            src={uploadedImage}
            alt="Uploaded image"
            width={500}
            height={500}
            objectFit="contain"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
