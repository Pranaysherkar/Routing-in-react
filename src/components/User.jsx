import React from "react";
import { Link } from "react-router-dom";
function User() {
  return (
    <>
    <div className="w-full h-screen bg-black py-24">

  
      <div className=" w-full  bg-black flex items-center justify-center text-white text-5xl">
        User
   
      </div>

      <div className="flex flex-col bg-black items-center justify-center text-white">
        <Link className="text-white text-2xl mt-10 border p-5" to="/user/jhon">john</Link>
        <Link className="text-white text-2xl mt-10 border p-5" to="/user/ram">ram</Link>
        <Link className="text-white text-2xl mt-10 border p-5" to="/user/sham">sham</Link>
      </div>
      </div>
    </>
  );
}

export default User;
