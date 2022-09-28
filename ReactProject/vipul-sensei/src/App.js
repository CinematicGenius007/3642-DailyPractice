import Background from "./static/backgrounds/emma-birman-on8ih2Em_vA-unsplash.jpg";

/*import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";*/

import Form from './components/Form/Form';

function App() {
  return (
    <div
      style={{backgroundImage: `url(${Background})`}}
      className="App flex flex-col items-center justify-between min-h-screen w-full text-white bg-black bg-no-repeat bg-center bg-cover overflow-x-hidden"
    >
      <div className="min-h-screen w-full backdrop-blur-sm flex-1 flex flex-col lg:flex-row justify-between items-stretch">
        <nav className="basis-60"></nav>
      </div>
    </div>
  );
}

export default App;
