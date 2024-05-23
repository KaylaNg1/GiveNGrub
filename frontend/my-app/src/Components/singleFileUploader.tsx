import React, { useState } from "react";
import './fileUpload.css'

const SingleFileUploader = () => {
  // TypeScript type annotation indicating that the state can either be a File object or null
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (file) {
      console.log("Uploading file...");

      const formData = new FormData();
      formData.append("file", file);

      try {
        // You can write the URL of your server or any other endpoint used for file upload
        console.log("in try catch")
        const result = await fetch("http://localhost:8000/upload", {
          method: "POST",
          body: formData,
        });

        const data = await result.json();

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <>
      <div className="fileInput">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {/* file && is used to conditionally render certain parts of UI only if state is true */}
      {file && (
        <section>
          File details:
          <ul id="fileDescription">
            <li>Name: {file.name}</li>
            <li>Type: {file.type}</li>
            <li>Size: {file.size} bytes</li>
          </ul>
        </section>
      )}

      {file && <button onClick={handleUpload}>Upload a file</button>}
    </>
  );
};

export default SingleFileUploader;