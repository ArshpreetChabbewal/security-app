import "./App.css";
import ReactDOM from "react-dom";
import { Router, Route, Link } from "react-router";
import Login from './Components/Login/Login';
import Alert from './Components/Alert/Alert';
import Home from './Components/Home/Home';
import Signup from "./Components/Login/Signup";
import Map from './Components/Map/Map';


function App() {
  return <div className="App">
    <Login/>
    <Signup/>
    <Alert/>
    <Home/>
    <Map/>   
  </div>;
}

export default App;
