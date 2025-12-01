import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
