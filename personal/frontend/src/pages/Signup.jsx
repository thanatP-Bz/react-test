import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import familyImg from "../images/family.jpg";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSignup } from "../hooks/useSignup";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Signup = () => {
  const [values, setValues] = useState(initialState);
  const { signupHook } = useSignup();
  const { user, isLoading, showAlert, displayAlert } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  const handlerChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(user);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { name, email, password } = values;
    if (!name || !email || !password) {
      setValues({ name: "", email: "", password: "" });
      displayAlert();
      return;
    }

    let currentUser = { name, email, password };
    signupHook(currentUser);
    setValues({ name: "", email: "", password: "" });
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
          <h3 className="form-h3">Sign Up</h3>
          {showAlert && <Alert />}

          <FormRow
            type="name"
            value={values.name}
            name="name"
            handlerChange={handlerChange}
          />
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
              Already a member ?
              <Link to="/login">
                <button
                  type="button"
                  disabled={isLoading}
                  className="text-blue-600 pl-2"
                >
                  Login
                </button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
