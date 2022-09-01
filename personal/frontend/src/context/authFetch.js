import { useAuthContext } from "../hooks/useAuthContext";
import axios from "axios";

//axios
const authFetch = axios.create({
  baseURL: "/api/auth",
});
