import React, { useState } from "react";
import { useLogin } from "../hook/useLogin";
import Alert from "../components/Alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState({
    show: false,
    type: "",
    msg: "",
  });
  const { error, isLoading, login } = useLogin();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!email || !password) {
      displayAlert(true, "danger", "please provide all value");
    }

    login(email, password);

    setEmail("");
    setPassword("");
  };

  const displayAlert = (show = false, type = "", msg = "") => {
    setShowAlert({ show, type, msg });
  };

  return (
    <form className="login" onSubmit={submitHandler}>
      {showAlert.show && <Alert {...showAlert} removeAlert={displayAlert} />}
      <h3>Login</h3>
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
        <button disabled={isLoading}>login</button>
      </div>
    </form>
  );
};

export { Login };
