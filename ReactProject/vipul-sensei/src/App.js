import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import {useEffect, useState} from "react";
import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Background from "./static/backgrounds/jeremy-bishop-G9i_plbfDgk-unsplash.jpg";

/*class User {
  constructor(name, age, address, username, password) {
    this.Name = name;
    this.Age = age;
    this.Address = address;
    this.Username = username;
    this.Password = password;
  }
}*/

/*
* {
    Name: null,
    Age: null,
    Address: null,
    Username: null,
    Password: null,
  }
* */

function App() {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  let navigate = useNavigate();

  const onRegister = (userData) => {
    setUser(userData);
  }

  const onLogin = (cred) => {
    setAuth(cred.username === user.Username && cred.password === user.Password);
  }

  useEffect(() => {
    if (user && !auth) {
      navigate("./login");
    } else if (user && auth) {
      navigate("./welcome");
    } else {
      navigate("/");
    }
  }, [user, auth]);

  return (
    <div
      className="App flex flex-col min-h-screen w-full bg-pc-8 text-white bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <nav className="w-full py-6 px-8 text-cyan-400 flex justify-between items-center">
        <Link to="/"><i className="fad fa-user-secret text-5xl"></i></Link>
        <span className="text-4xl">
          {user && !auth && <Link to="/login" className="hover:underline underline-offset-2 cursor-pointer">Login</Link>}
          {!user && <Link to="/register" className="hover:underline underline-offset-2 cursor-pointer">Sign Up</Link>}
          {user && auth && <Link to="/welcome" className="hover:underline underline-offset-2 cursor-pointer"><i
            className="fad fa-database"></i></Link>}
        </span>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome User={user} />} />
        {/*  {(user && auth) ? <Navigate to="/welcome" /> : <Home />}*/}
        {/*</Route>*/}
        <Route path="/welcome" element={<Welcome User={user} />} />
        {/*<Route exact path="/login">*/}
        {/*  {(user && auth) ? <Navigate to="/welcome" /> : <Login onLogin={onLogin} />}*/}
        {/*</Route>*/}
        {/*<Route exact path="/register">*/}
        {/*  {(user && auth) ? <Navigate to="/login" /> : <Registration onRegister={onRegister} />}*/}
        {/*</Route>*/}
        {/*{(user && auth) ? <Navigate to="/welcome" /> : <Route path="/login" element={<Login onLogin={onLogin} />}></Route>}*/}
        {/*{user ? <Navigate to="/login" /> : <Route path="/register" element={<Registration onRegister={onRegister} />}></Route>}*/}
        <Route path="/login" element={<Login onLogin={onLogin} />} />
        <Route path="/register" element={<Registration onRegister={onRegister} />} />
      </Routes>
    </div>
  );
}

export default App;
