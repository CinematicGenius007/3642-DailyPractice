// import {
//   Routes,
//   Route,
//   Link,
//   useNavigate
// } from "react-router-dom";
// import {useEffect, useState} from "react";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
import { useState } from "react";
import Home from "./components/Home";
// import Welcome from "./components/Welcome";
import Background from "./static/backgrounds/jeremy-bishop-G9i_plbfDgk-unsplash.jpg";

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [string, setString] = useState("");
  return (
    <div
      className="App flex flex-col min-h-screen w-full bg-pc-8 text-white bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <div className="flex flex-col py-8 w-64 sm:w-96 mx-auto">
        <input className="py-1 bg-black/50 px-2 text-lg border border-cyan-400 outline-none m-3" value={num1} type="number" onChange={e => setNum1(e.currentTarget.value)} placeholder="Even or Odd" />
        <input className="py-1 bg-black/50 px-2 text-lg border border-cyan-400 outline-none m-3" value={num2} type="number" onChange={e => setNum2(e.currentTarget.value)} placeholder="Prime or not" />
        <input className="py-1 bg-black/50 px-2 text-lg border border-cyan-400 outline-none m-3" value={string} onChange={e => setString(e.currentTarget.value)} placeholder="Palindrome or not" />
      </div>
      <Home num1={Number(num1)} num2={Number(num2)} string={string} />
    </div>
  );
}

export default App;
