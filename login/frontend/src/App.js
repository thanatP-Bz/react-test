import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Login, SignUp } from "./page";
import Navbar from "./components/Navbar";
import { useAuthContext } from "../src/context/authContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          <Route
            path="/signup"
            element={!user ? <SignUp /> : <Navigate to="/" />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
