import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import { Parallax } from "react-scroll-parallax";
import getScrollAnimation2 from "../utils/getScrollAnimation2";
import getScrollAnimation5 from "../utils/getScrollAnimation5";
import useWindowSize from "@rooks/use-window-size";

const features = [
  "Dear EARTHING, I am Coffey May, a skilled JavaScript and React.js developer who specializes in front-end development. However, I am also comfortable with full-stack projects, from initial design to back-end integration and database management. My passion lies in creating beautiful, responsive UIs and writing clean, maintainable code that enhances the user experience. I thrive in a team environment that values collaborative problem-solving, sophisticated design, and delivering top-quality work. As a versatile developer, I enjoy taking on new challenges and adapting to new technologies and methodologies. Recently, I completed a project using TypeScript, ReactJS, NodeJS, MaterialUI, and GraphQL, demonstrating my proficiency with a variety of exciting technologies. If you are interested in seeing some of my work, please visit my GitHub page, where you can explore my portfolio. If you find my work impressive, kindly give me a star. Thank you for taking the time to learn more about me, and I look forward to hearing from you soon. Sincerely, Coffey May",
  // "Internet without borders.",
  // "Supercharged VPN",
  // "No specific time limits."
];

const About = () => {
  const { innerWidth } = useWindowSize();
  const scrollAnimation5 = useMemo(() => getScrollAnimation5(), []);
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
  const scrollAnimation2 = useMemo(() => getScrollAnimation2(), []);
  return (
    <>
      <div
        className="astronaut h-screen mb-96 px-6 sm:px-0 xs:px-0 md:px-0 lg:px-36  z-1 -mt-2"

        // id="spaceman-three"
      >
        <Parallax
          speed={0}
          // className="pb-36"
          opacity={innerWidth < 1025 ? null : [0, 1]}
          scale={innerWidth < 1025 ? null : [-0.15, 1]}
        ></Parallax>

        <Parallax
          speed={0}
          opacity={innerWidth < 1025 ? null : [-1, 1]}
          scale={innerWidth < 1025 ? null : [0, 1]}
        >
          <ScrollAnimationWrapper className="astronaut ">
            <div className="flex flex-row flex-wrap ">
              <div className="w-full lg:w-1/2  min-h-full bg-blue-200">
              <motion.div
              id="skills-two"
              className=" text-shadow shadow-black mt-20 absolute md:pt-12  md:mx-0 sm:px-2 flex flex-col  justify-center  w-12/12 lg:w-12/12"
              variants={scrollAnimation2}
            >
              <h2 className=" text-white text-4xl lg:text-6xl font-medium ">
                Graphic Design,
                <br /> Full Stack Web Services,
                <br /> Fine Art,
                <br /> and More...
              </h2>
              <h3 className="my-12 text-white lg:text-3xl w-2/3">
                Performant and optimized applications, built on sound design
                principles.
              </h3>
              <motion.div
                  className={"image-container"}
                  variants={scrollAnimation}
                >
                  <Image
                    src="/assets/react-lighthouse-perfect.webp"
                    alt="VPN Illustrasi"
                    quality={100}
                    layout="fill"
                    className={"image"}
                  />
                </motion.div>
                </motion.div>
              </div>

              <div className="w-full lg:w-1/2 ">
              <motion.div
              id="skills-two"
              className=" text-shadow  shadow-black mt-20 absolute md:pt-12  md:mx-0 sm:px-2 flex flex-col  justify-center  w-12/12 lg:w-12/12"
              variants={scrollAnimation5}
            >
              {/* <h2 className=" text-white text-4xl lg:text-6xl font-medium ">
                Graphic Design,
                <br /> Full Stack Web Services,
                <br /> Fine Art,
                <br /> and More...
              </h2>
              <h3 className="my-12 text-white lg:text-3xl w-2/3">
                Performant and optimized applications, built on sound design
                principles.
              </h3> */}
              <motion.div
                  className="image-container ml-20 mt-36 "
                  // variants={scrollAnimation5}
                >
                  <Image
                    src="/assets/X5NY.gif"
                    alt="VPN Illustrasi"
                    width={500}
                    height={500}
                    quality={100}
                    // layout="fill"
                    // className={"image"}
                  />
                </motion.div>
                </motion.div>
              </div>
            </div>
            {/* <motion.div
              id="skills-two"
              className=" text-shadow shadow-black mt-20 absolute md:pt-12  md:mx-0 sm:px-2 flex flex-col  justify-center  w-12/12 lg:w-12/12"
              variants={scrollAnimation2}
            >
              <h2 className=" text-white text-4xl lg:text-6xl font-medium ">
                Graphic Design,
                <br /> Full Stack Web Services,
                <br /> Fine Art,
                <br /> and More...
              </h2>
              <h3 className="my-12 text-white lg:text-3xl w-2/3">
                Performant and optimized applications, built on sound design
                principles.
              </h3>
              <motion.div
                  className={"image-container"}
                  variants={scrollAnimation}
                >
                  <Image
                    src="/assets/react-lighthouse-perfect.webp"
                    alt="VPN Illustrasi"
                    quality={100}
                    layout="fill"
                    className={"image"}
                  />
                </motion.div>
                </motion.div> */}
              </ScrollAnimationWrapper>

              {/* <ScrollAnimationWrapper
              // className="lg:pl-96   mt-96  ml-44 s  absolute  "
              >
             
              <ul className="text-black bg-gray-100 p-8 rounded-xl  md:text-base  self-start list-inside sm:w-8/12 md:w-6/12">
            {features.map((feature, index) => (
              <motion.li
                className="relative circle-check custom-list text-sm  md:text-sm "
                custom={{duration: 2 + index}}
                variants={scrollAnimation}
                key={feature}
                whileHover={{
                // scale : 1.1,
                transition: {
                  duration: .2
                }
                }}>
                  {feature}
              </motion.li>
              )
            )}
          </ul>
            </motion.div>
          </ScrollAnimationWrapper> */}
        </Parallax>
      </div>
    </>
  );
};

export default About;
