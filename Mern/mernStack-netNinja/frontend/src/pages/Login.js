import React, { useState } from "react";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin();

  const submitHandler = async (e) => {
    e.preventDefault();

    login(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form className="login" onSubmit={submitHandler}>
      <h3>Log In</h3>

      <label>Email Address:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={isLoading}>Log In</button>
      {error && <div className="error">Error</div>}
    </form>
  );
};

export default Login;
