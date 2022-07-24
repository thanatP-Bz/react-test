import { BrowserRouter, Routes, Route } from "react-router-dom";

//components
import { Home, Signup, Login } from "./pages/index";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/signup" element={<Signup />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
