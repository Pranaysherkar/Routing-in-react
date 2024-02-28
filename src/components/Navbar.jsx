import React from 'react'
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-center gap-16 text-xl text-white font-light items-center bg-black">
    <NavLink className={(e)=>{
        return[e.isActive?`text-red-400 font-bold`:``].join(" ");
    }} to="/">Home</NavLink>
    <NavLink className={(e)=>{
        return[e.isActive?`text-red-400 font-bold`:``].join(" ");
    }} to="/about">about</NavLink>
    <NavLink className={(e)=>{
        return[e.isActive?`text-red-400 font-bold`:``].join(" ");
    }} to="/user">user</NavLink>
    <NavLink style={(e)=>{
        return {
            color: e.isActive ? 'orange' : '',
            fontWeight: e.isActive? 'bold':'',
        }
    }} to="/contact">contact</NavLink>
  </nav>
  )
}

export default Navbar
