import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

const UploadForm = () => {
  const [file, setFile] = useState("");
  const [selectedFile, setSelectedFile] = useState("");
  const [previewSource, setPreviewSource] = useState("");
  const { showAlert, clearAlert, dispatch } = useAuthContext();

  const changeHandler = (e) => {
    let file = e.target.files[0];

    previewFile(file);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      setPreviewSource(reader.result);
    };

    console.log(reader);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (!previewSource) return;

    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      const response = await axios.post(
        "/api/upload/image",
        base64EncodedImage
      );

      const { image } = response.data;
      console.log(image);
    } catch (error) {}
  };

  return (
    <>
      <div className="mt-[100px] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold my-4">My Pictures</h1>
        <p className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          voluptates rem quia qui, adipisci labore!
        </p>
        <form className="flex flex-col" onSubmit={handlerSubmit}>
          <input type="file" onChange={changeHandler} />
          {file && <div>{file.name}</div>}
          <button className="btn" type="submit">
            submit
          </button>
        </form>
        {previewSource && (
          <img src={previewSource} alt="chosen" style={{ height: "300px" }} />
        )}
      </div>
    </>
  );
};

export default UploadForm;
