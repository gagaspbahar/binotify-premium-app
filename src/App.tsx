import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PremiumArtists from "./pages/PremiumArtists";
import SongManagement from "./pages/SongManagement";
import Subscription from "./pages/Subscription";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/premium-artists" element={<PremiumArtists />} />
        <Route path="/song-management" element={<SongManagement />} />
      </Routes>
    </div>
  );
}

export default App;
