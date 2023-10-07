import React, { useContext } from "react";
import Usercontext from "../utils/Usercontext";

const Footer = () => {
  const { user } = useContext(Usercontext);
  console.log(user);
  return (
    <div className="flex items-center justify-center h-16 bg-white mt-5 font-semibold">
      © 2023 Foodish. All Rights Reserved.
      <span className="text-xl font-bold text-red-600 ml-3">
        {user.name} - {user.email}
      </span>
    </div>
  );
};

export default Footer;
