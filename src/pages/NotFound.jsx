import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-56 justify-center ">
        <div className="text-4xl font-bold">NotFound</div>
        <NavLink to="/">Go back home</NavLink>
      </div>
    </>
  );
};

export default NotFound;
