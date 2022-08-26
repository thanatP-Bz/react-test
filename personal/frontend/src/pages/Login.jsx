import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import familyImg from "../images/family-5.jpg";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogin } from "../hooks/useLogin";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: false,
};

const Login = () => {
  const [values, setValues] = useState(initialState);
  const { user, isLoading, showAlert, displayAlert } = useAuthContext();
  const { loginHook } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (user) {
        navigate("/");
      }
    }, 3000);
  }, [user, navigate]);

  const handlerChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const { email, password } = values;

    if (!email || !password) {
      setValues({ email: "", password: "" });
      displayAlert();
      return;
    }

    let currentUser = { email, password };
    loginHook(currentUser);
    setValues({ email: "", password: "" });
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
            Welcome back!
          </h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam dicta
            obcaecati
          </p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mx-4 w-full md:mx-0">
        <form onSubmit={onSubmitHandler} className="form">
          <h3 className="form-h3">Log in</h3>
          {showAlert && <Alert />}

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
              Not a member yet ?
              <Link to="/signup">
                <button
                  type="button"
                  disabled={isLoading}
                  className="text-blue-600 pl-2"
                >
                  Sign up
                </button>
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
