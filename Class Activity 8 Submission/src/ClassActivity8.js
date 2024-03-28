import React from "react";
import {BrowserRouter, Route, Routes, Link} from "react-router-dom";
import Home from "./ClassActivity8Home";
import Login from "./ClassActivity8Login";

export default function ClassActivity8() {
return (
    <div>
        <BrowserRouter>
        <nav>
            <Link to="/">Home</Link> | {" "}
            <Link to="/login">Login</Link> | {" "}
        </nav>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        </BrowserRouter>
    </div>
)
}
