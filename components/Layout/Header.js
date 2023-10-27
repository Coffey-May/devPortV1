import React, { useState, useEffect, useHistory } from "react";
import Link from "next/link";
import Image from "next/image";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline";
import Logo from "../../public/assets/Logo.svg";
import useWindowSize from "@rooks/use-window-size"
import { debounce } from '../../utils/helpers';
import { useRouter } from 'next/router';
import Login from "../../pages/login";
import NextAuth from "next-auth/next";

const Header = () => {
  const { innerHeight } = useWindowSize();
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
    // const [show, setShow] = useState(true)
    // const controlNavbar = () => {
    //     if (window.scrollY === 0) {
    //         setShow(false)
    //     } else if(window.screenY === -1){
    //         setShow(true)
    //     }
        
    // }

    // useEffect(() => {
    //     window.addEventListener('scroll', controlNavbar)
    //     return () => {
    //         window.removeEventListener('scroll', controlNavbar)
    //     }
    // }, [])
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const router = useRouter()
  
    const handleScroll = debounce(() => {
      const currentScrollPos = window.scrollY;
  
      setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 0) || currentScrollPos < 0);
  
      setPrevScrollPos(currentScrollPos);
    }, 10);
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => window.removeEventListener('scroll', handleScroll);
  
    }, [prevScrollPos, visible, handleScroll]);
  
    const navbarStyles = {
      // position: 'fixed',
      // height: '0px',
      // width: '100%',
      // backgroundColor: 'grey',
      // textAlign: 'center',
      // transition: 'top 0.6s'
    }
  
    

    
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 0);
    });
  }, []);
  return (
    <>
      <header
       style={{ ...navbarStyles, top: visible ? '0' : '-60px' }}
        className={ 
          " nav-fade fixed top-0 w-full  z-30 bg-transparent transition-all " +
          (scrollActive ? "  pt-0" : " pt-4")
        }
      >
        <nav className=" px-16 sm:px-  mx-auto grid grid-flow-col py-3 sm:py-">
          <div className="col-start-1 col-end-2 flex items-center">
          

            <Link
            href="../"
            // className={activeLink ==="hero"? " absolute":null}
              // activeClass="active"
              // to="about"
              // spy={true}
              // smooth={true}
              // duration={1000}
              // onSetActive={() => {
              //   setActiveLink("hero");
              // }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 a")
              }
            >
            <Image alt="developer logo" className="text-black"  src={Logo} />
            </Link>

          </div>
          <ul className="hidden lg:flex col-start-4 col-end-8 text-white items-center">
           
            {/* <Link
            href="../"
            smooth={true}
              // activeClass="active"
              // to="about"
              // spy={true}
              // smooth={true}
              // duration={1000}
              // onSetActive={() => {
              //   setActiveLink("about");
              // }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
             Base
            </Link> */}


            {/* <LinkScroll
            // href="#skills"
         
              activeClass="active"
              to="spaceman-two"
              spy={true}
           
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
            className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "feature"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
             Tech
            </LinkScroll> */}



   
   <a    className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              } href="../#about">
             Home</a>

              <a    className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "spaceman-two"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              } href="../#skills">
             Tech</a>
        
             <a    className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "spaceman-three"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              } href="../#spaceman-three">
             Mission</a>

             <a    className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "works"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              } href="../../#works">
             Showcase</a>



            {/* <LinkScroll
              activeClass="active"
              to="spaceman-three"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("spaceman-three");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "spaceman-three"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
            Mission
            </LinkScroll> */}

            {/* <LinkScroll
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("work");
              }}
              className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "work"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              }
            >
              Showcase
            </LinkScroll> */}

          </ul>
          <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <p   className=" w-44 md:w-60 text-white mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all">
             
                  Sign In
             
            </p>
    
            <div  className="absolute mt-8" > <ButtonOutline>Sign Up</ButtonOutline></div>
            <Login/>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-white">
            {/* <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("about");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "about"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent")
              }
            > */}
               <a    className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "about"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              } href="../">
            
              <svg
                className="w-6 h-6 ml-2.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Home</a>
              {/* Home
            </LinkScroll> */}

{/* 
            <LinkScroll
              activeClass="active"
              to="feature"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("feature");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "feature"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            > */}
                <a    className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "spaceman-two"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              } href="../#spaceman-two">
            
              <svg
                className="w-6 h-6 ml-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
              Tech</a>
              {/* Skills
            </LinkScroll> */}
            {/* <LinkScroll
              activeClass="active"
              to="spaceman-three"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("spaceman-three");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "spaceman-three"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            > */}
               <a    className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "spaceman-three"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              } href="../#spaceman-three">
           
              <svg
                className="w-6 h-6 ml-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Mission</a>
             {/* About
            </LinkScroll> */}
            {/* <LinkScroll
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink("work");
              }}
              className={
                "mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                (activeLink === "testimoni"
                  ? "  border-orange-500 text-orange-500"
                  : " border-transparent ")
              }
            > */}
                 <a    className={
                "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                (activeLink === "works"
                  ? " text-orange-500 animation-active "
                  : " text-black-500 hover:text-orange-500 ")
              } href="../#works">
          
              <svg
                className="w-6 h-6 ml-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              Showcase</a>
              {/* Work
            </LinkScroll> */}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  );
};

export default Header;