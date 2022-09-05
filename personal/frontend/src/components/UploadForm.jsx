import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

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
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mt-[100px] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold my-4">My Pictures</h1>
        <p className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          voluptates rem quia qui, adipisci labore!
        </p>
        <form className="" onSubmit={handlerSubmit}>
          <input type="file" onChange={changeHandler} />
          {file && <div>{file.name}</div>}
          <button className="" type="submit">
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
