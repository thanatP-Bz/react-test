import React, { useState } from "react";
import useSignUp from "../hook/useSignup";
import Alert from "../components/Alert";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });
  const { signUp, isLoading } = useSignUp();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      displayAlert(true, "danger", "please provide all value");
    }

    signUp(email, password);

    setEmail("");
    setPassword("");
  };

  const displayAlert = (show = false, type = "", msg = "") => {
    setShowAlert({ show, type, msg });
  };

  return (
    <form className="signup" onSubmit={submitHandler}>
      {showAlert.show && <Alert {...showAlert} removeAlert={displayAlert} />}
      <h3>Sign Up</h3>
      <div>
        <label>email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label>password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="btn-container">
        <button disabled={isLoading}>sign up</button>
      </div>
    </form>
  );
};

export { SignUp };
