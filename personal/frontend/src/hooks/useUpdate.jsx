import { useAuthContext } from "./useAuthContext";

export const useUpdate = (currentUser) => {
  const { authFetch } = useAuthContext();

  const updateHook = async () => {
    try {
      const { data } = await authFetch.patch("/auth/updateuser", currentUser);
      console.log(data);
    } catch (error) {
      console.log(error.response);
    }
  };
  return { updateHook };
};
