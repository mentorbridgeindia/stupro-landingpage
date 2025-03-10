import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <ParallaxProvider>
      <div className="App">
        <Home />
      </div>
    </ParallaxProvider>
  );
};

export default App;
