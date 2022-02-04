import React from "react"
import { Route, Routes } from "react-router-dom"

import "./app.css"
import TopBar from "./components/topbar/TopBar"
import Home from "./pages/home/Home"
import Single from "./pages/single/Single"
import Write from "./pages/write/Write"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
  return (
    <div className="App">
    <TopBar />
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/post/:id" element={<Single/>}/>
        <Route exact path="/" element={<Home/>}/>
    </Routes>
    </div>
  );
}

export default App;
