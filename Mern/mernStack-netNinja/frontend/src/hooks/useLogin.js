import { useAuthContext } from "./useAuthContext";
import { useState } from "react";

const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setIsLoading(true);

    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      //store in local storage
      localStorage.setItem("user", JSON.stringify(json));

      //update frontend
      dispatch({ type: "LOG_IN", payload: json });

      //update loading state
      setIsLoading(false);
    }
  };

  return { error, isLoading, login };
};

export default useLogin;
