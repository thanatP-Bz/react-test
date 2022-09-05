import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { UPLOAD_SUCCESS, UPLOAD_ERROR } from "../context/action";
import Alert from "./Alert";

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const { showAlert, clearAlert, dispatch } = useAuthContext();

  const types = ["image/png", "image/jpeg"];

  const changeHandler = (e) => {
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      dispatch({ type: UPLOAD_SUCCESS });
    } else {
      setFile(null);
      dispatch({ type: UPLOAD_ERROR });
      clearAlert();
    }
  };

  return (
    <>
      <div className="mt-[100px] flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold my-4">My Pictures</h1>
        <p className="my-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
          voluptates rem quia qui, adipisci labore!
        </p>
        <form className="">
          <input type="file" onChange={changeHandler} />
          {file && <div>{file.name}</div>}
          {showAlert && <Alert />}
        </form>
      </div>
    </>
  );
};

export default UploadForm;
