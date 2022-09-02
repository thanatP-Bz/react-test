import { useAuthContext } from "./useAuthContext";
import { UPDATE_BEGIN, UPDATE_SUCCESS, UPDATE_ERROR } from "../context/action";
import axios from "axios";

export const useUpdateUser = () => {
  const { state } = useAuthContext();

  //axios
  const authFetch = axios.create({
    baseURL: "/api",
  });

  //requrest
  authFetch.interceptors.request.use(
    (config) => {
      config.headers.common["Authorization"] = `Bearer ${state.token}`;
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(error.response);
      if (error.response.status === 401) {
        console.log(`AUTH ERROR`);
      }
      return Promise.reject(error);
    }
  );

  const updateUserHook = async (currentUser) => {
    try {
      const { data } = await authFetch.patch("/auth/updateuser", currentUser);
      console.log(data);
    } catch (error) {}
  };

  return { updateUserHook };
};
