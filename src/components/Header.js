import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/AppSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-10 cursor-pointer"
          alt="Menu"
          src="https://cdn.iconscout.com/icon/free/png-512/free-hamburger-menu-462145.png?f=avif&w=512"
        />
        <img
          className="h-10 mx-2"
          alt="logo"
          src="data:image/png;base64,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"
        />
      </div>
      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 rounded-r-full">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="user"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        />
      </div>
    </div>
  );
};

export default Header;
