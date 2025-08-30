import React from "react";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import SecurityUpdateIcon from "@mui/icons-material/SecurityUpdate";
import { Avatar } from "@mui/material";
import Data from "./Data";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  return (
    <div className="flex-[0.8] ml-5 mt-5">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-10">
          <div className="flex space-x-2 text-[#CCCCCC]">
            <AssignmentIndIcon />
            <h1>Profile</h1>
          </div>
          <div
            onClick={() => navigate("/student/update")}
            className="flex space-x-2 cursor-pointer text-[#CCCCCC]">
            <SecurityUpdateIcon />
            <h1 className="font-bold text-[#CCCCCC]">Update</h1>
          </div>
        </div>
        <div className="w-[98%] bg-[#1B263B] relative rounded-xl  ">
          <div className="absolute left-[50%] top-[-23%] ">
            <Avatar src={user.result.avatar} sx={{ width: 70, height: 70 }} />
          </div>
          <div className="overflow-y-scroll h-[32rem]">
            <div className="flex py-10 ml-10 space-x-40 ">
              <div className="flex flex-col space-y-10">
                <Data label="Name" value={user.result.name} />
                <Data label="Email" value={user.result.email} />
                <Data label="Username" value={user.result.username} />
                <Data label="Department" value={user.result.department} />
                <Data label="Father's Name" value={user.result.fatherName} />
                <Data label="Mother's Name" value={user.result.motherName} />
              </div>
              <div className="flex flex-col space-y-10 ">
                <Data label="DOB" value={user.result.dob} />
                <Data label="Year" value={user.result.year} />
                <Data
                  label="Contact Number"
                  value={user.result.contactNumber}
                />
                <Data label="Section" value={user.result.section} />
                <Data
                  label="Father's Contact Number"
                  value={user.result.fatherContactNumber}
                />
                <Data label="Batch" value={user.result.batch} />
              </div>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Body;
