
import "./App.css";
import { Link, BrowserRouter, Router,Routes, Route } from "react-router-dom";
import Login from "./login/Login.jsx";
import SignUp from "./sign up/SignUp.jsx";
import Home from "./home/Home.jsx";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp  />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
  
    </BrowserRouter>
      
    </>
  );
}

export default App;
