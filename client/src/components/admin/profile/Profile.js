import React from "react";
import Body from "./Body";
import Header from "../Header";
import Sidebar from "../Sidebar";

const Profile = () => {
  return (
    <div className="bg-[#1B263B] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#0D1B2A] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 ">
        <Header />
        <div className="flex flex-[0.95] ">
          <Sidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default Profile;
