export const useUpdate = (currentUser) => {
  const updateHook = () => {
    console.log(currentUser);
  };
  return { updateHook };
};
