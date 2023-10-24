import React, { useMemo,useState,useEffect } from "react";
import Image from "next/image";
import Testimonial from "./Testimonial";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline";
// import Maps from "/public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation3 from "../utils/getScrollAnimation3";
import getScrollAnimation4 from "../utils/getScrollAnimation4";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Parallax } from "react-scroll-parallax";
import useWindowSize from "@rooks/use-window-size";
import { Tab } from '@headlessui/react'
import Art from "./Art";

const Work = () => {


  




  const scrollAnimation3 = useMemo(() => getScrollAnimation3(), []);
  const scrollAnimation4 = useMemo(() => getScrollAnimation4(), []);
  const { innerWidth } = useWindowSize();
  const [domLoaded, setDomLoaded] = useState(false);
  const myLoader = ({ src, width, quality }) => {
    // return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }
  
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return ( 
    
    <>
     {domLoaded && (
    <Tab.Group className="pb-20" >
 
    
   
    
   
 
      <div id="works" className=" bg-slate-900 shadow-inner  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <Parallax
            speed={0}
            // opacity={innerWidth < 1025 ? null : [2, 0]}
            // scale={ innerWidth < 1025 ? null :[ -1,3]}
          >
            <ScrollAnimationWrapper>
            {/* <div className=" shadow-lg  sm:mt-12 rounded-xl p-8"> */}
              <motion.p
                variants={scrollAnimation4}
                className="pt-20 pb-8 text-7xl sm:text-3xl lg:text-7xl font-medium text-white leading-relaxed text-left"
              >
                Have a look at what we do...
              </motion.p>
              <motion.p
                variants={scrollAnimation3}
                className=" pb-8 text-4xl leading-normal w-10/12 sm:w-10/12 lg:w-5/12 mx-auto my-2 text-right text-white"
              >
              {/* Our areas of expertise */}
              </motion.p>
              {/* </div> */}
            </ScrollAnimationWrapper>
          
            <Tab.List>
            <div className="mb-20 grid grid-flow-row md:grid-flow-col grid-cols-3 sm:grid-cols-3 md:grid-cols-3  gap-4 lg:gap-12 py-8 lg:py-12 lg:pb-0  sm:px-0 ">
           
            <ScrollAnimationWrapper   className="border-2 border-white text-white hover:bg-blue-900 hover:text-white transition-all hover:shadow-orange  shadow-lg bg-slate-900 h-full  w-full flex flex-col justify-center items-center  rounded-xl py-0 px-6 lg:px-6 xl:px-12">
              <Tab>
                <motion.div
                  // variants={scrollAnimation3}

                  whileHover={{
                 
                    transition: {
                      duration: 0.2,
                    },
                    
                  }}
                >
                  
                  <div className="flex flex-flow-row p-0 md:p-4 lg:p-0 mt-3 lg:mt-8 justify-center">
                    <Image
                      src="/assets/figma.svg"
                      width={innerWidth>1000 ? 72.5 : 36}
                      height={innerWidth>1000 ? 82.5 : 41}
                      alt="Free Plan"
                    />
                    <Image
                      src="/assets/adobe.png"
                      width={innerWidth>1000 ? 72.5 : 36}
                      height={innerWidth>1000 ? 82.5 : 41}
                      alt="Free Plan"
                    />
                       {/* <Image
                       className="p-4"
                      src="/assets/adobeCC.png"
                      width={72.5 }
                      height={82.5}
                      alt="Free Plan"
                    /> */}
                  </div>
                  <p className=" md:text-lg text-black-600 sm:text-xs xs:text-xs text-xs font-medium capitalize my-1 sm:my-3">
                    Graphic Design | UI/UX 
                  </p>
                  <div className="flex flex-col w-full justify-center mb-4 flex-none mt-12">
                    <ButtonOutline>Select</ButtonOutline>
                  </div>
              
                </motion.div>
                </Tab>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper   className="border-2 border-white text-white hover:bg-blue-900 hover:text-white transition-all hover:shadow-orange  shadow-lg bg-slate-900 h-full  w-full flex flex-col justify-center items-center  rounded-xl py-0 px-6 lg:px-6 xl:px-12">
              <Tab >
                <motion.div
                  // variants={scrollAnimation3}

                  whileHover={{
                    // scale: 1.02,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                 
                  <div className="flex flex-flow-row p-0 md:p-4 lg:p-0 mt-3 lg:mt-8 justify-center ">
          
                    <Image
                      src="/assets/js.svg"
                      width={innerWidth>1000 ? 72.5 : 36}
                      height={innerWidth>1000 ? 82.5 : 41}
                      alt="Standard Plan"
                    />
                    <Image
                      src="/assets/csharp.png"
                      width={innerWidth>1000 ? 72.5 : 36}
                      height={innerWidth>1000 ? 82.5 : 41}
                      alt="Standard Plan"
                    />
                  </div>
                  <p className=" md-truncate md-w-36 md:text-lg text-black-600 sm:text-xs xs:text-xs text-xs font-medium capitalize my-1 sm:my-3">
                    Software | Web Development{" "}
                  </p>
               
                  <div className="flex flex-col w-full justify-center mb-4 flex-none mt-12">
                    <ButtonOutline>Select</ButtonOutline>
                  </div>
                
                </motion.div>
                </Tab>
              </ScrollAnimationWrapper>
              <ScrollAnimationWrapper   className="border-2 border-white text-white hover:bg-blue-900 hover:text-white transition-all hover:shadow-orange  shadow-lg bg-slate-900 h-full  w-full flex flex-col justify-center items-center  rounded-xl py-0 px-6 lg:px-6 xl:px-12">
              <Tab>
                <motion.div
                  // variants={scrollAnimation3}
                 
                  whileHover={{
                    // scale: 1.02,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                
              
                  <div className="flex flex-flow-row p-0 md:p-4 lg:p-0 mt-3 lg:mt-12 justify-center">
                    <Image
                      src="/assets/PChinatownbangkok.jpeg"
                      width={innerWidth>1000 ? 72.5 : 36}
                      height={innerWidth>1000 ? 82.5 : 41}
                      alt="Premium Plan"
                      className="mr-4"
                    />
                    <Image
                      src="/assets/PBrooklyndiner.jpeg"
                      width={innerWidth>1000 ? 72.5 : 36}
                      height={innerWidth>1000 ? 82.5 : 41}
                      alt="Premium Plan"
                    />
                  </div>
                  <p className="md:text-lg text-black-600 sm:text-xs text-xs font-medium capitalize my-1 sm:my-3">
                    Oil Paintings{" "}
                  </p>
                
     
                  <div className="pt-6 flex flex-col w-full justify-center mb-4 flex-none mt-12">
                    <ButtonOutline>Select</ButtonOutline>
                  </div>
               
                </motion.div>
             </Tab>
             
              </ScrollAnimationWrapper>
         
         
            </div>
            </Tab.List>
          </Parallax>
          <Tab.Panels>
      <Tab.Panel>
        <div className="shadow-lg bg-gray-200 text-black md:mt-16 sm:mt-0 mb-16 rounded-xl p-8">
          <h1>GRAPHIC DESIGN | UI/UX</h1>
          <h2>11111111</h2>
          <p>kjsannkjsafnjksnfjnsjkfnkjnfnfkankf</p>
          jdfnjfn
        </div>
      </Tab.Panel>
      <Tab.Panel>
      <div className="shadow-lg bg-gray-200 text-black md:mt-16 sm:mt-0 mb-16 rounded-xl p-8" >
          <h1>SOFTWARE | WEB DEVELOPMENT</h1>
          <h2>222222222</h2>
          <Image
                      src="/assets/devscreen.jpg"
                      width={innerWidth>1000 ? 1500 : 700}
                      height={innerWidth>1000 ? 82.5 : 41}
                      alt="Premium Plan"
                    />
          <a target="blank" href="https://www.coffeymaydev.com/">ssss</a>
  
        </div>
      </Tab.Panel>

{/* {console.log(artSearch)} */}
      <Tab.Panel >
        <Art/>
       
      </Tab.Panel>
    </Tab.Panels>
        </div>
       
      </div>
     
      </Tab.Group>
     )}
      </>
  );
};

export default Work;
