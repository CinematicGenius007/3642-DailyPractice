import Background from "./static/backgrounds/emma-birman-on8ih2Em_vA-unsplash.jpg";

/*import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";*/

import AppStyles from './App.module.css';

function App() {
  return (
    <div
      style={{backgroundImage: `url(${Background})`}}
      className="App min-h-screen w-full text-white bg-black bg-no-repeat bg-center bg-cover overflow-x-hidden"
    >
      <div style={{backdropFilter: `blur(5px)`}} className="flex flex-col items-center justify-between min-h-screen w-full p-16">
        <h1 className={AppStyles.text}>This is a component of our website!</h1>
      </div>
    </div>
  );
}

export default App;
