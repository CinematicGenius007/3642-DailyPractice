import { useState } from "react";
// import Background from "./static/backgrounds/jeremy-bishop-G9i_plbfDgk-unsplash.jpg";

import Home from "./components/Home/Home";

function App() {
  /*const [weight, setWeight] = useState(2);
  const buttonClick = () => {
    console.log("Hello!");
  };*/
  return (
    <div
      className="App flex flex-col min-h-screen w-full bg-white text-white bg-no-repeat bg-center bg-cover px-8"
    >
      <Home />
      {/*<div className="text-center my-12 mx-auto rounded w-full pt-6 px-6 pb-36 text-neutral-900 max-w-xl bg-neutral-100/70">
        <div className="text-4xl mb-8">Your Weight?</div>
        <input
            type="number"
            min={2.0}
            max={500.0}
            step={0.1}
            value={weight}
            onChange={(e) => setWeight(Number(e.currentTarget.value))}
            className="focus:outline-0 font-bold border-2 border-neutral-900 text-md py-1 px-3 rounded bg-white/60"
        />
      </div>*/}
      {/*{ weight > 0 && (<div className="my-12 mx-auto rounded w-full pt-6 px-6 pb-36 border-2 border-neutral-900 text-neutral-900 max-w-xl bg-neutral-100">
        <div className="text-4xl mb-8">Hello Task Tracker</div>
      </div>) }*/}
    </div>
  );
}

export default App;
