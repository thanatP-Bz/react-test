import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useUpdate } from "../hooks/useUpdate";
import FormRow from "../components/FormRow";
import Alert from "../components/Alert";

const Profile = () => {
  const { user, displayAlert, showAlert, isLoading } = useAuthContext();
  const { updateHook } = useUpdate();
  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    displayAlert();
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        {}
        <form onSubmit={onSubmitHandler} className="form">
          <h1 className="text-center text-xl">Profile</h1>
          {showAlert && <Alert />}
          <FormRow
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <FormRow
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button disabled={isLoading} className="btn w-full">
            save change
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;
