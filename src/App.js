import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>
    </div>
  );
}

export default App;
