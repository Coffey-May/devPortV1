import React, { useMemo, useRef } from "react";
import Image from "next/image";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { motion } from "framer-motion";
import getScrollAnimation3 from "../utils/getScrollAnimation3";
import getScrollAnimation2 from "../utils/getScrollAnimation2";
import { Parallax } from "react-scroll-parallax";
import useWindowSize from "@rooks/use-window-size";

const features = [
  "• Designing a modern highly responsive web-based user interface",
  "• Prototying, Branding, Logo Design...",
  "• Translating designs and wireframes into high-quality code",
  "• Examine and understand user interactions",
  "• Optimizing for maximum performance across a vast array of devices and browsers",
  "• Coordinating with various teams working on distinct layers",
  "• proficiency in JavaScript, including DOM manipulation and the JavaScript object model",
  "• Thorough understanding of React.js and its core principles",
  "• Prior experience with popular React.js workflows (such as Flux or Redux)",
  "• Familiarity with more current specifications of EcmaScript",
  "• Familiarity with RESTful APIs• Familiarity with HTML / CSS",
  "• GIT experience, Team work-flows, and remote coordination",
  "• Knowledge of modern authorization mechanisms, such as JSON Web Token",
  "• Familiarity with modern front-end build pipelines and tools.",
  "• Ability to understand business requirements and translate them into technical requirements",
];

const Skills = ({
  listUser = [
    {
      name: "Server",
      number: "50",
      icon: "/assets/css.svg",
    },
    {
      name: "Users",
      number: "390",
      icon: "/assets/js.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/html5.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/nodejs.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "/assets/nextjs.svg",
    },
    {
      name: "Users",
      number: "390",
      icon: "/assets/reactjs.svg",
    },
    {
      name: "Locations",
      number: "20",
      icon: "/assets/gitlab.png",
    },
    {
      name: "Server",
      number: "50",
      icon: "assets/csharp.png",
    },
    {
      name: "Users",
      number: "390",
      icon: "/assets/figma.svg",
    },
    {
      name: "Server",
      number: "50",
      icon: "assets/typescript (1).png",
    },
    {
      name: "Users",
      number: "390",
      icon: "/assets/adobe.png",
    },
    {
      name: "Users",
      number: "390",
      icon: "/assets/graphql.png",
    },
  ],
}) => {
  const scrollAnimation3 = useMemo(() => getScrollAnimation3(), []);
  const scrollAnimation2 = useMemo(() => getScrollAnimation2(), []);
  const { innerWidth } = useWindowSize();
  // let ax;

  return (
    
    <>
<div className="flex flex-row flex-wrap mt-36 mb-96 pt-36 rocket">
  <div className="w-full lg:w-1/2  min-h-full ">
  <ScrollAnimationWrapper
          id="skills"
          className="  rounded-lg lg:w-12/12 md-absolute grid grid-flow-row sm:grid-flow-row grid-cols-3 sm:grid-cols-3  py-9 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-gray-100 bg-white-500  "
        >
          {listUser.map((listUsers, index) => (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.009,
                },
              }}
              className=" sm:pr-0 border-none flex items-center justify-start sm:justify-center py-1   px-1 sm:w-auto mx-auto sm:mx-0 "
              key={index}
              custom={{ duration: 0.25 + index / 4 }}
              variants={scrollAnimation2}
            >
              <Parallax
                opacity={innerWidth < 1025 ? null : [3, 0]}
                //
              >
                <div className=" flex mx-auto m-0 ">
                  <div
                   
                    // className=" flex items-center justify-center bg-transparent w-30 h-30  rounded-full"
                  >
                    <img
                      src={listUsers.icon}
                      className="h-30 w-30 m-0"
                      id="tech-logos"
                    />
                  </div>
                  <div className="flex flex-col">
                  </div>
                </div>
              </Parallax>
            </motion.div>
          ))}
          </ScrollAnimationWrapper>
  </div>
  <div className="w-full lg:w-1/2 min-h-full   ">
  <ScrollAnimationWrapper
          id="border-erase">
            <motion.div
              {...(innerWidth >= 1025
                ? "let ax = scrollAnimation"
                : "let ax = null")}
                variants={scrollAnimation2}
            >
              <div className=" px-4 ">
                <h3
                  className=" mt-28 pb-4 w-full lg:w-10/12 xl:tracking-wider text-shadow shadow-black text-white text-2xl xl:text-5xl lg:text-4xl  font-medium leading-relaxed "
                >
                  How comprehensive design principles {" "}
           
                   can help your business
                </h3>
  
                <ul className=" text-white shadow-xd morph p-4 mr-0 lg:mr-20">
                  {features.map((feature, index) => (
                    <strong>
                      <motion.li
                    
                        opacity={1}
                      
                        className="pb-2 text-sm w-12/12 text-shadow shadow-black hover:text-orange-500"
                        custom={{ duration: 0.025 }}
                 
                        key={feature}
                        whileHover={{
                          
                          scale: 1.1,
                          transition: {
                            duration: 0.009,
                          },
                        }}
                      >
                        {feature}
                      </motion.li>
                    </strong>
                  ))}
                </ul>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
  </div>
</div>







     
    </>
  );
};

export default Skills;
