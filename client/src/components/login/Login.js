import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div
      className="h-screen w-screen backdrop-blur-md flex  justify-center"
      style={{
        backgroundImage: `url("/Explaining%20Fraction%20Division%20Comic%20Strip.png")`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      
      }}> 

      <div className="flex flex-col items-center mt-40 space-y-20"> 


        <h1 className="text-3xl font-semibold bg-[#242424] text-[#CCCCCC] w-full text-center py-4 bg-opacity-75 rounded-2xl"
        style={{fontFamily:'Montserrat'}}>
           College Management System
        </h1>

        <div className="grid grid-cols-2 gap-28">
          <div className="h-60 w-80 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#242424] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold text-[#CCCCCC]"
            style={{fontFamily:'Montserrat'}}
            >
              Faculty
              </h1>

            <Link
              type="button"
              to="/login/facultylogin"
              className="flex items-center justify-center bg-[#4B6F88] h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
         
          <div className="h-60 w-80 space-y-11 shadow-2xl flex flex-col justify-center items-center bg-transparent backdrop-blur-md bg-[#242424] bg-opacity-60 rounded-xl">
            <h1 className="text-4xl font-extrabold text-[#CCCCCC]" 
            style={{fontFamily:'Montserrat'}}>
               Student</h1>


            <Link
              type="button"
              to="/login/studentlogin"
              className="flex items-center justify-center bg-[#4B6F88] h-10 w-32 text-lg rounded-lg text-white hover:scale-110 transition-all duration-200">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
