import React from 'react'
import useWindowSize from "@rooks/use-window-size"

const Modal = ({title,image, setShowModal,medium}) => {
    const { innerWidth, innerHeight } = useWindowSize();


  return (
    <>
    <div  
    className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
  >
    <div className="absolute w-auto my-0 mx-auto max-w-2xl ">
      {/*content*/}
      <div className="w-full border-0 rounded-lg shadow-lg relative flex flex-col  bg-black outline-none focus:outline-none">
        {/*header*/}
        <div 
        // className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
        >
          <h3 className="text-3xl font-semibold p-2">
           {title}
          </h3>
          <button
            className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            onClick={() => setShowModal(false)}
          >
            <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
          </button>
        </div>
        {/*body*/}
        <img className={`object-cover max-h-96   ${image.innerHeight> "700px" ? 'max-h-96' : null}`} src={image} alt="" />
        <div className="relative p-6 flex-auto">
         
          <p className="my-4 text-slate-500 text-lg leading-relaxed">
           {medium}
          </p>
        </div>
        {/*footer*/}
        {/* <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"> */}
          <button
            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm border border-red-500 focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            type="button"
            onClick={() => {setShowModal(false)}}
          >
            Close
          </button>
       
        {/* </div> */}
      </div>
    </div>
  </div>
  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </>
  )
}

export default Modal