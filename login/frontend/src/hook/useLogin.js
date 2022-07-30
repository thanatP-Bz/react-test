import { useAuthContext } from "../context/authContext";
import { useState } from "react";
import { LOGIN } from "../context/authAction";
import axios from "axios";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setError(null);
    setLoading(true);

    const response = await fetch("/api/user/login", {
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
      //set to local storage
      localStorage.setItem("user", JSON.stringify(json));
    }

    //dispatch
    dispatch({ type: LOGIN, payload: json });

    setLoading(false);
  };

  return { error, loading, login };
};
