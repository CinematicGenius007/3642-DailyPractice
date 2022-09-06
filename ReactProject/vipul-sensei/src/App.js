// import { useState } from "react";
// import Home from "./components/Home";
// import Background from "./static/backgrounds/jeremy-bishop-G9i_plbfDgk-unsplash.jpg";

function App() {
  // const [num1, setNum1] = useState(0);
  // const [num2, setNum2] = useState(0);
  // const [string, setString] = useState("");
  // style={{ backgroundImage: `url(${Background})` }}
  return (
    <div
      className="App flex flex-col min-h-screen w-full bg-white text-white bg-no-repeat bg-center bg-cover px-8"
    >
      <div className="my-12 mx-auto rounded w-full pt-6 px-6 pb-36 border-2 border-neutral-900 text-neutral-900 max-w-xl bg-neutral-100">
        <div className="text-4xl mb-8">Hello Task Tracker</div>
        <button className="py-2 px-6 bg-neutral-900 text-white rounded text-lg">Add Task</button>
      </div>
    </div>
  );
}

export default App;
