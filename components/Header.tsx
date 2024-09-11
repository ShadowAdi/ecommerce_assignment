import React from "react";

const Header = () => {
  return (
    <div className="flex w-full px-3 py-4 border-b-2 border-gray-300 text-center items-center justify-between ">
      <h2 className="font-semibold text-center text-2xl">Assignment</h2>
      <p className="sm:block hidden text-lg font-normal">I Am Using Fake Store Api</p>
    </div>
  );
};

export default Header;
