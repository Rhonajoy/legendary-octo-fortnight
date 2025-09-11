
import "./App.css";
import Login from "./components/authentication/Login";
import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/authentication/Signup";

function App() {
  return (
    <>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
   
     
    </>
  );
}

export default App;
