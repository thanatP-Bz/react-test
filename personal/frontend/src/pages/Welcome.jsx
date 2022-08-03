import React from "react";

const Welcome = () => {
  return (
    <div className="container m-auto h-screen flex justify-between items-center ">
      <div className="">
        <h1>paragraph</h1>
      </div>

      <div className="flex items-center justify-center bg-slate-400 p-12 mr-10">
        <form>
          <div className="flex flex-col">
            <label>name</label>
            <input type="text" />
            <label>email</label>
            <input type="email" />
            <label>password</label>
            <input type="password" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Welcome;
