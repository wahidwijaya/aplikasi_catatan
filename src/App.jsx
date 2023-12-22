import React from "react";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddNote />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
