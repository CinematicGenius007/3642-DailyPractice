// import Background from "./static/backgrounds/emma-birman-on8ih2Em_vA-unsplash.jpg";

/*import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import About from "./components/About/About";*/

import Form from './components/Form/Form';

function App() {
  return (
    <div
      style={{backgroundImage: `url("https://images.unsplash.com/photo-1661632350562-f8ad6a2665d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=1&auto=format%2Ccompress&fit=crop&w=5999&h=594%201x,%20https://images.unsplash.com/photo-1661632350562-f8ad6a2665d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8&dpr=2&auto=format%2Ccompress&fit=crop&w=5999&h=594%202x")`}}
      className="App flex flex-col items-center justify-between min-h-screen w-full text-white bg-black bg-no-repeat bg-center bg-cover overflow-x-hidden"
    >
      <div className="min-h-screen w-full backdrop-blur-sm">
        <Form />
      </div>
    </div>
  );
}

export default App;
