import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Components/Login/Login';
import Forgot from './Components/Login/Forgot';
import Signup from './Components/Login/Signup';
import Home from './Components/Home';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Forgot" element={<Forgot />} />
        <Route exact path="/Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
