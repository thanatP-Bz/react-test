import React from "react";

const SignUp = () => {
  return (
    <form className="signup">
      <h3>Sign Up</h3>
      <div>
        <label>email</label>
        <input type="email" />
      </div>

      <div>
        <label>password</label>
        <input type="password" />
      </div>

      <div className="btn-container">
        <button>sign up</button>
      </div>
    </form>
  );
};

export { SignUp };
