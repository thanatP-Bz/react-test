import { useState } from "react";
import { useAuthContext } from "../context/authContext";
import { LOGIN } from "../context/authAction";

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signUp = async (email, password) => {
    setError(null);
    setLoading(true);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setLoading(false);
    }

    if (response.ok) {
      //update state
      dispatch({ type: LOGIN, payload: json });

      //set to storage
      localStorage.setItem("user", JSON.stringify(json));

      setLoading(false);
    }
  };
  return { signUp, isLoading };
};

export default useSignup;
