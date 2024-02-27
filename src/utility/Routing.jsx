import React from 'react';
import Home from '../components/Home';
import Aboyt from "../components/Aboyt";
import User from "../components/User";
import Contact from "../components/Contact";
import { Routes, Route } from "react-router-dom";

function Routing() {
  return (
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/about" element={<Aboyt/>} />
    <Route path="/user" element={<User/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>
  )
}

export default Routing