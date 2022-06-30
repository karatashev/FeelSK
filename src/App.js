import React from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Grid from "./components/Grid";
import Hero from "./components/Hero";
import Locations from "./components/Locations";
import Navbar from "./components/Navbar";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Locations />
      <Search />
      <Grid />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
