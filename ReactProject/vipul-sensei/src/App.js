// import { useState } from "react";
import Background from "./static/backgrounds/jeremy-perkins-uhjiu8FjnsQ-unsplash.jpg";
// import Sun from "./static/planets/sun.jpeg"
import Mercury from "./static/planets/mercury.png";
import Venus from "./static/planets/venus.png";
import Mars from "./static/planets/mars.png";
import Jupiter from "./static/planets/jupiter.png";
import Saturn from "./static/planets/saturn.png";
import Uranus from "./static/planets/uranus.png";
import Neptune from "./static/planets/neptune.png";
import Planet from "./components/Planet/Planet";
import {useState} from "react";

function App() {
  const [weight, setWeight] = useState(2);
  const [planet, setPlanet] = useState("Earth");
  const [ratio, setRatio] = useState(1.0);
  /*const buttonClick = () => {
    console.log("Hello!");
  };*/
  const onPlanet = (planet, ratio) => {
    setPlanet(planet);
    setRatio(ratio);
  };
  return (
    <div
      style={{backgroundImage: `url(${Background})`}}
      className="App flex flex-col items-center justify-center min-h-screen w-full text-white bg-no-repeat bg-center bg-cover overflow-x-hidden"
    >
      <div className="text-center mt-6 mb-4">
        <div>
          <button className="mr-6 px-6 py-2 text-2xl rounded bg-gray-transparent border-2 border-white" onClick={() => onPlanet("Earth", 1.0)}>Earth</button>
          <input
              value={weight}
              onChange={(e) => setWeight(Number(e.currentTarget.value))}
              type="number"
              min={2}
              max={400}
              className="text-2xl py-2 px-6 rounded bg-gray-400/0 focus:outline-0 border-2 border-white"
          />
        </div>
        <div className="mt-8 mb-6 text-4xl">Your weight on {planet} on {Math.round(weight * ratio)} kg</div>
      </div>
      <div className="w-full bg-gray-300/0 relative flex flex-wrap items-center justify-center space-y-8">
        <Planet image={Mercury} ratio={0.377} onClick={onPlanet} name={"Mercury"} />
        <Planet image={Venus} ratio={0.904} onClick={onPlanet} name={"Venus"} />
        <Planet image={Mars} ratio={0.38} onClick={onPlanet} name={"Mars"} />
        {/*<Planet image={Sun} size={10} />*/}
        <Planet image={Jupiter} ratio={2.53} onClick={onPlanet} name={"Jupiter"} />
        <Planet image={Saturn} ratio={1.065} onClick={onPlanet} name={"Saturn"} />
        <Planet image={Uranus} ratio={0.886} onClick={onPlanet} name={"Uranus"} />
        <Planet image={Neptune} ratio={1.14} onClick={onPlanet} name={"Neptune"} />
      </div>
      <div className="hidden h-1 w-1 h-2 w-2 h-3 w-3 h-6 w-6 h-8 w-8 h-9 w-9 h-10 w-10 h-12 w-12 h-14 w-14 h-16 w-16"></div>
    </div>
  );
}

export default App;
