import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Howto from "./components/Howto";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Howto />
    </div>
  );
}

export default App;
