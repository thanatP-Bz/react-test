import React, { useState } from "react";
import { useLogin } from "../hook/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin();

  const submitHandler = (e) => {
    e.preventDefault();

    login(email, password);

    setEmail("");
    setPassword("");
  };

  return (
    <form className="login" onSubmit={submitHandler}>
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
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export { Login };
