import React, { useState } from "react";
import familyImg from "../images/family.jpg";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAuthContext } from "../hooks/useAuthContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Welcome = () => {
  const [values, setValues] = useState(initialState);
  const { isLoading, showAlert, displayAlert } = useAuthContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handlerChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { name, email, password, isMember } = values;

    if (!name || !email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    console.log(values);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-screen">
      <div className="sm:block hidden relative ">
        <img
          className="w-full h-screen object-cover inset-0 absolute"
          src={familyImg}
          alt="family"
        />
        <div className="absolute inset-0 bg-slate-900 bg-opacity-50"></div>
        <div className="absolute text-white text-center top-[30%] left-[50%] -translate-x-[50%] ">
          <h1 className="font-['Lobster'] my-4 text-4xl whitespace-nowrap">
            Welcome to my Website
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dicta
            obcaecati
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-4 w-full md:mx-0">
        <form onSubmit={onSubmitHandler} className="form ">
          <h3 className="form-h3">{values.isMember ? "Login" : "Sign Up"}</h3>
          {showAlert && <Alert />}
          {!values.isMember && (
            <FormRow
              type="name"
              value={values.name}
              name="name"
              handlerChange={handlerChange}
            />
          )}
          <FormRow
            type="email"
            value={values.email}
            name="email"
            handlerChange={handlerChange}
          />
          <FormRow
            type="password"
            value={values.password}
            name="password"
            handlerChange={handlerChange}
          />

          <button type="submit" className="form-btn">
            Submit
          </button>

          <div className="text-center mt-3">
            <p className="text-gray-600 text-sm">
              {values.isMember ? "No a member yet ?" : "Already a member ?"}
              <button
                type="button"
                disabled={isLoading}
                onClick={toggleMember}
                className="text-blue-600 pl-2"
              >
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
