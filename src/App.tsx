import { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SongManagement from "./pages/SongManagement";
import Subscription from "./pages/Subscription";
import { Routes, Route, Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import AddSong from "./pages/AddSong";
import DeleteSong from "./pages/DeleteSong";
import EditSong from "./pages/EditSong";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/song-management" element={<SongManagement />} />
        <Route path="/add-song" element={<AddSong />} />
        <Route path="/delete-song" element={<DeleteSong />} />
        <Route path="/edit-song" element={<EditSong />} />
      </Routes>
    </div>
  );
}

export default App;
