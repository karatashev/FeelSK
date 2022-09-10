import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import { AlertContainer } from 'react-custom-alert';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
      </Routes>

      <AlertContainer floatingTime={7000} />
    </div>
  );
}

export default App;
