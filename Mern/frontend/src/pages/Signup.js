import React, { useState } from "react";
import { useSignUp } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignUp();

  const submitHandler = async (e) => {
    e.preventDefault();

    await signup(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <form className="signup" onSubmit={submitHandler}>
      <h3>Sign Up</h3>

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

      <button disabled={isLoading}>Sign Up</button>
      {error && <div className="error">error</div>}
    </form>
  );
};

export default Signup;
