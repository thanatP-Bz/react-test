import { useContext } from "react";
import { AppContext } from "../contexts/UseContext";

const UseAppcontext = () => {
  return useContext(AppContext);
};

export { UseAppcontext };
