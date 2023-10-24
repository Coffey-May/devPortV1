import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="mb-8 w-full text-fuchsia-500 font-medium tracking-wide py-2 px-5 sm:px-8 border border-fuchsia-500 text-Fuchsia-500 bg-Fuchsia-700 outline-none rounded-lg capitalize hover:bg-fuchsia-500 hover:text-white transition-all hover:shadow-Fuchsia-500 ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;