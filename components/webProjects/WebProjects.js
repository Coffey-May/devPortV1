import React from 'react';
import Image from "next/image";
import MultiStep from "./multiStepper/MultiStep";
import { useState, useEffect, Fragment } from "react";
// import ButtonOutline from "./misc/ButtonOutline";
import WebModal from "./multiStepper/WebModal";



const webProjects = [
  {
    id: 1,
    title: `Multi-Step Form Validator`,
    description: "common work flow for auth",
    image:"/assets/multi-step.webp",
    link:<MultiStep/>,

  },
 
];

const WebProjects = () => {
      
  const [artSearch, setArtSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [link,setLink] = useState("")
  const [medium, setMedium] = useState("");
  return (
    // <div className="shadow-lg text-black md:mt-16 sm:mt-0 mb-16 rounded-xl p-8" >
 
  




    <div className="pb-36 shadow-lg  bg-gray-200 mt-16  rounded-xl p-8 ">
    <p className=" text-4xl font-extrabold pb-8 text-left text-black" >SOFTWARE | WEB DEVELOPMENT</p>
      <input
      className=" block mb-8 lg:w-4/12 md:w-6/12 sm:w-10/12 xs:w-full font-medium tracking-wide py-2 px-5 sm:px-8   bg-white-500 outline-none rounded-lg"
        type="text"
        value={artSearch}
        onChange={(e) => setArtSearch(e.target.value)}
      />
      <div className=" grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-auto  gap-12  py-8 lg:py-12 lg:pb-0  ">
        {webProjects
          .filter((p) => p.title.toLowerCase().includes(artSearch))
          .map((m) => (
            <div
              id="between"
              key={m.id}
              class=" justify-self-center flex flex-col space-between h-full  max-w-sm border  rounded-lg shadow dark:bg-gray "
            >
              <div>
                <Image
                  // id="paint-size"
                  width={500}
                  height={500} 
                  className="object-contain m-auto rounded-t-lg"
                  src={m.image}
                  alt=""
                />
              </div>
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-800 dark:text-gray-800">
                  {" "}
                  {m.title}
                </h5>

                <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
                  {m.description}
                </p>
                <div className=" bg-blue-500 flex flex-col w-full justify-center mb-4 flex-none mt-12">
                  <button className='text-white' onClick={() => {setShowModal(true);console.log(m);setTitle(m.title);setLink(m.link);setImage(m.image);setDescription(m.description);setMedium(m.medium)}}>
                    <button>View</button>
                  </button>
     
                </div>
              </div>
            </div>
          ))}
 
      </div>
      {showModal ? (

<WebModal description={description} link={link} title={title} image={image} setShowModal={setShowModal}/>

  ) : null}
    {/* </div> */}
 


{/* 
    <Image
                src="/assets/devscreen.jpg"
                width={innerWidth>1000 ? 1500 : 700}
                height={innerWidth>1000 ? 82.5 : 41}
                alt="Premium Plan"
              /> */}
    {/* <a target="blank" href="https://www.coffeymaydev.com/">ssss</a> */}

  </div>
  )
}

export default WebProjects