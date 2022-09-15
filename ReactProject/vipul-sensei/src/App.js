import Background from "./static/backgrounds/elliott-engelmann-DjlKxYFJlTc-unsplash.jpg";

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div
      style={{backgroundImage: `url(${Background})`}}
      className="App min-h-screen w-full text-white bg-no-repeat bg-center bg-cover overflow-x-hidden"
    >
      <div style={{backdropFilter: `blur(5px)`}} className="flex flex-col items-center justify-between min-h-screen w-full">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
