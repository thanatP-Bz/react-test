import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUpdateUser } from "../hooks/useUpdateUser";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";

const Profile = () => {
  const { user, displayAlert, showAlert, isLoading } = useAuthContext();
  const { updateUserHook } = useUpdateUser();

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!name || !email) {
      displayAlert();
      return;
    }

    const currentUser = { name, email };
    updateUserHook(currentUser);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={onSubmitHandler} className="form mx-5 md:mx-0 mt-16">
          <h1 className="text-center text-xl">Profile</h1>
          {showAlert && <Alert />}
          <FormRow
            type="text"
            name="name"
            value={name}
            handlerChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            handlerChange={(e) => setEmail(e.target.value)}
          />
          <button disabled={isLoading} className="btn w-full">
            {isLoading ? "Please Wait..." : "Save Change"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
