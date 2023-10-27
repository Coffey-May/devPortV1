import React, { useMemo } from "react";
import Image from "next/image";
import ButtonOutline from "./misc/ButtonOutline";
import ButtonOutline2 from "./misc/ButtonOutline2";
import { motion, AnimatePresence } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import getScrollAnimation2 from "../utils/getScrollAnimation2";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Parallax } from "react-scroll-parallax";
import useWindowSize from "@rooks/use-window-size";
// import myResume from '../public/Coffey May Resume.pdf'
// import { Document, Page } from 'react-pdf';

const Hero = () => {
  let heightQ;
  const { innerWidth, innerHeight } = useWindowSize();

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const scrollAnimation2 = useMemo(() => getScrollAnimation2(), []);
  console.log(innerWidth);

  return (
    <>
    <div id="about">
      <Parallax
        speed={-30}
        className="h-screen w-full section bg-scroll"
        opacity={innerWidth < 1025 ? null : [2, 0]}
        scale={innerWidth < 1025 ? null : [2, 0]}
      >
        <ScrollAnimationWrapper>
          <div className=" grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
            <AnimatePresence>
              <motion.div
                // id="title-overlay"
                className="mt-10  md:px-auto lg:ml-0 md:absolute sm:absolute xs:absolute lg:relative z-50"
                // className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
                variants={scrollAnimation}
              >
                <div className="resize lg:mt-0 xl:mt-20 sm:mt-10 xs:px-1 sm:px-1 md:px-10  z-10 lg:pl-24 md:pl-16 flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                  <h1 className=" text-center  nameTitle pb-2 mt-16 sm:pt-0  md:w-full font-extrabold lg:tracking-widest md:tracking-wide sm:text-8xl xs:text-6xl md:text-8xl lg:text-6xl xl:text-7xl   text-white leading-normal ">
                    <strong>COFFEY MAY </strong>
                  </h1>
                  <h6 className=" mx-auto PT text-white text-1xl font-light  sm:text-4xl xs:text-2xl md:text-4xl  lg:text-xl xl:text-2xl ">
                    {" "}
                    S O F T W A R E &nbsp;|&nbsp; U I / U X &nbsp;|&nbsp; D E S
                    I G N{" "}
                  </h6>

                  <p className="  text-center lg:text-xl  md:text-1xl sm:text-4xl xs:text-4xl  text-white md:mt-4  mb-6 md:tracking-widest sm:tracking-wide ">
                    Progressive full
                    stack web applications and design in react, nodejs, and
                    more...
                  </p>
                  <a className="m-0 p-0 w-full" href="../Services">
                    <ButtonOutline>Learn More</ButtonOutline>
                  </a>
                  <a
                    className="m-0 p-0 w-full"
                    href="assets/Coffey May Resume.pdf"
                    target="blank"
                  >
                    <ButtonOutline>Resume </ButtonOutline>
                  </a>

                  {/* </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className=" flex w-full ">
              
              <motion.div
              variants={scrollAnimation2}

              // className=" h-mt-20 h-full lg:inline-block  md:-mt-20 md:hidden sm:hidden xs:hidden spaceman-one-jump"
              >
                
                <Image
                  className=" -mt-20  lg:inline-block    md:hidden sm:hidden xs:hidden spaceman-one-jump"
                  id="flip-image"
                  src="/assets/astro2float-removebg-preview.png"
                  // src="/assets/X5NY.gif"
                  alt="astronaut"
                  quality={100}
                  width={900}
                  height={400}
                  // width={innerWidth > 2012 ?  heightQ = 383 :  heightQ =300}
                  // height={heightQ}
                  priority
                  // layout="responsive"
                />
       <div className="burst w-96  h-44  ml-96 -translate-x-full "></div>
         
              </motion.div>
             
            </div>
            {/* </motion.div> */}
          </div>
        </ScrollAnimationWrapper>
      </Parallax>
      {/* <hr className="-mt-64 "></hr> */}
   
    </div>

       </>
  );
};

export default Hero;
