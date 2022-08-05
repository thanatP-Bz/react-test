import React, { useState } from "react";
import familyImg from "../images/family.jpg";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Welcome = () => {
  const [values, setValues] = useState(initialState);

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2">
      <div className="sm:block hidden">
        <img
          className="w-full h-screen object-cover"
          src={familyImg}
          alt="family"
        />
      </div>

      <div className="flex flex-col justify-center items-center">
        <form onSubmit={onSubmitHandler} className="form ">
          <h3 className="form-h3">{values.isMember ? "Login" : "Sign Up"}</h3>

          {!values.isMember && (
            <div className="flex flex-col py-2">
              <label className="text-gray-600">Name</label>
              <input className="form-input" type="text" />
            </div>
          )}

          <div className="flex flex-col py-2 ">
            <label className="text-gray-600">email</label>
            <input className="form-input" type="email" />
          </div>
          <div className="flex flex-col py-2 ">
            <label className="text-gray-600">password</label>
            <input className="form-input" type="password" />
          </div>
          <button className="form-btn">submit</button>

          <div className="text-center">
            <p className="text-gray-600 text-sm">
              {values.isMember ? "No a member yet ?" : "Already a member ?"}
              <button onClick={toggleMember} className="text-blue-600 pl-2">
                {values.isMember ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
