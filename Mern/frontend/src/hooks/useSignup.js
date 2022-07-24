import { useState } from "react";
import useAuthContext from "./useAuthContext";

export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch("/api/user/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" },
    });

    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      //save to localStorage
      localStorage.setItem("user", JSON.stringify(json));

      //update user
      dispatch({ type: "SIGN_UP", payload: json });

      //update loading State
      setIsLoading(false);
    }
  };

  return { error, isLoading, signup };
};
