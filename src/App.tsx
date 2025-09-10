import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";

function App() {
  return (
    <>
    {/* <Login/> */}
    <Signup/>
      <h1 className="text-orange-600 font-bold  p-4">Tailwind is Working</h1>
    </>
  );
}

export default App;
