import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

import { IoIosArrowDropdownCircle } from "react-icons/io";

const ProfileNav = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { user } = useAuthContext();
  const { logoutHook } = useLogout();

  const logoutHandler = () => {
    logoutHook();
  };

  return (
    <div>
      <div className="flex py-[0.3px] px-3 rounded-md bg-[#10ac84]">
        <p className="text-white font-sm mr-2 py-2 px-1 md:flex">
          {user ? user.name : "email"}
        </p>
        <button className="mt-1" onClick={() => setProfileOpen(!profileOpen)}>
          <IoIosArrowDropdownCircle className=" text-white text-2xl" />
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
