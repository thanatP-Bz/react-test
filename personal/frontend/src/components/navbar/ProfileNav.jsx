import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const ProfileNav = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useAuthContext();
  const { logoutHook } = useLogout();

  const logoutHandler = () => {
    logoutHook();
  };

  return (
    <div>
      <div className="flex">
        <p className="text-white font-sm mr-2 p-2 hidden md:flex">
          {user ? user.email : "email"}
        </p>
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          type="button"
          className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white mr-2 md:mr-0"
          id="user-menu-button"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="sr-only">Open user menu</span>
          <img
            className="w-8 h-8 md:h-10 md:w-10 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </button>
      </div>

      <div
        className={`bg-white fixed top-16 right-[4%] rounded-md ${
          !profileOpen ? "hidden" : "block"
        }`}
      >
        <div className="flex flex-col py-2 px-7 text-center shadow-md">
          <Link to="/profile">
            <button className="py-1 hover:text-green-400">Your Profile</button>
          </Link>
          <div className="bg-gray-900 w-full h-[0.5px]"></div>
          <Link to="/">
            <button
              className="py-1 hover:text-green-400"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileNav;
