import React from "react";
import Homepage from "./components/pages/Homepage";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

const App = () => {
  return (
    <main>
      <Navbar />
      <Homepage />
      <Footer />
    </main>
  );
};

export default App;
