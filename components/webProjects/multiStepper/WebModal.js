import React from "react";
import useWindowSize from "@rooks/use-window-size";

const Modal = ({ title, image, link, description, setShowModal, medium }) => {
  const { innerWidth, innerHeight } = useWindowSize();

  return (
    <>
      <div className="w-screen h-full fixed  inset-0 z-50 outline-none focus:outline-none bg-gray-200">
        {/* <div className="w-full border-0 rounded-lg shadow-lg relative flex flex-col  bg-black outline-none focus:outline-none"> */}
          <div>
            {link}
            <button
            className="text-red-500 -mt-20 absolute background-transparent font-bold uppercase px-6 py-2 text-sm border border-red-500 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {
              setShowModal(false);
            }}
          >
            Close
          </button>
          </div>

       
        </div>
      {/* </div> */}
    </>
  );
};

export default Modal;
