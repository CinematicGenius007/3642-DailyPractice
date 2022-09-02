import {useState} from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    onLogin({
      username: username,
      password: password,
    });
  }

  return (
    <div className="flex-1 w-full py-12 px-8">
      <form
        onSubmit={submitForm}
        className="mx-auto my-12 w-full max-w-md flex flex-col items-stretch justify-center"
      >
        <fieldset className="border  border-cyan-400 pl-16 py-8 text-cyan-400">
          <legend className="text-xl italic px-2 bg-pc-8/40">Login</legend>
          <label className="text-xl font-bold">Username</label>
          <input
            className="mt-2 mb-4 py-2 px-4 italic text-xl   rounded focus:outline-0 border-2  border-cyan-400 bg-pc-1/40"
            type="text"
            minLength="4"
            value={username}
            onChange={(e) => setUsername(e.currentTarget.value)}
          />
          <label className="text-xl font-bold">Password</label>
          <input
            className="mt-2 mb-4 py-2 px-4 italic text-xl  rounded focus:outline-0 border-2  border-cyan-400 bg-pc-1/40"
            type="password"
            minLength="4"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button className="block bg-pc-1/40 mt-4 mb-2 px-4 py-1 text-2xl border-2  border-cyan-400 rounded" type="submit">Login</button>
        </fieldset>
      </form>
    </div>
  );
}
