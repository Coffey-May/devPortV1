import React from "react";
import Image from "next/image";
// import LogoVPN from "../../public/assets/Logo.svg";
// import Facebook from "../../public/assets/Icon/facebook.svg";
// import Twitter from "../../public/assets/Icon/twitter.svg";
// import Instagram from "../../public/assets/Icon/instagram.svg";
import FB from "../../public/assets/Facebook - Original.svg";
import LinkedIn from "../../public/assets/LinkedIn - Original.svg";
import Github from "../../public/assets/Github - Original.svg";
import Twitter from "../../public/assets/Twitter - Original.svg";
import Instagram from "../../public/assets/Instagram - Original.svg";
import { Link as LinkScroll } from "react-scroll";
import Link from "next/link";
// import services from "../Services"
const Footer = () => {
  return (
    <div className="section  pt-44 pb-24" id="space-foot">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          {/* <LogoVPN className="h-8 w-auto mb-6" /> */}
          <p className="mb-4 text-white">
            <strong className="font-medium">COFFEY MAY</strong> believes in
            quality web experiences, and adaptability; in todays rapidly
            evolving technological landscape...
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
          <div className="invert mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
            <Image
              priority
              src={FB}
              className="invert"
              height={32}
              width={32}
              alt="Follow us on Twitter"
            />
            </div>
            <div className="invert mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                priority
                className="invert"
                src={Twitter}
                height={32}
                width={32}
                alt="Follow us on Twitter"
              />
            </div>
            <div className=" invert mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
              className="invert"
                priority
                src={LinkedIn}
                height={32}
                width={32}
                alt="Follow us on Twitter"
              />
            </div>
            <div className=" invert mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
       
                priority
                src={Github}
                height={32}
                width={32}
                alt="Follow us on Twitter"
              />
            </div>
            <div className=" invert mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Image
                priority
                src={Instagram}
                height={32}
                width={32}
                alt="Follow us on Twitter"
              />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - Coffey May
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <Link href="../Services">  <p className=" hover:text-orange-500 cursor-pointer transition-all text-white mb-4 font-medium text-lg">Services</p></Link>
        
          <ul className="text-white ">
            <Link href="../Services">
              <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
              
                Brand Identity{" "}
              </li>
            </Link>
         
            <Link href="../Services/#design">
            <li className="my-2 hover:text-orange-500 cursor-pointer transition-all">
          
              Design{" "}
            </li>
            </Link>

            <Link href="../Services/#logos">
                 <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
          
              Logos{" "}
            </li>
            </Link>

                <Link href="../Services/#research">
                <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
          
              Research{" "}
            </li>
                </Link>
                <Link href="../Services/#UI/UX">
                <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
          
              UI/UX{" "}
            </li>
                </Link>
                <Link href="../Services/#products">
                <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
          
              Products{" "}
            </li>
                </Link>
                <Link href="../Services/#frontEnd">
                <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
          
              Front End{" "}
            </li>
                </Link>
                <Link href="../Services/#serverSide">
                <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
          
              Server Side{" "}
            </li>
                </Link>
           
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
        <Link  href="../Services/#method">  <p className=" hover:text-orange-500 cursor-pointer transition-all text-white mb-4 font-medium text-lg">Method</p></Link>
          <ul className="text-black-500">
          <Link  href="../Services/#process">
          <li className=" text-white my-2 hover:text-orange-500 cursor-pointer transition-all">
              Process{" "}
            </li>
          </Link>
          <Link  href="../Services/#iterativeDesign">
          <li className=" text-white my-2 hover:text-orange-500 cursor-pointer transition-all">
              Iterative Design{" "}
            </li>
          </Link>
          <Link  href="../Services/#expectations">
          <li className="text-white my-2 hover:text-orange-500 cursor-pointer transition-all">
              Expectations{" "}
            </li>
          </Link>
          <Link  href="../Services/#credentials">
          <li className=" text-white my-2 hover:text-orange-500 cursor-pointer transition-all">
              Credentials{" "}
            </li>
          </Link>
          <Link  href="../Services/#privacyPolicy">
          <li className=" text-white my-2 hover:text-orange-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
          </Link>
          <Link  href="../Services/#termsOfService">
          <li className=" text-white my-2 hover:text-orange-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </Link>
      </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
        <Link  href="../Services/#consult">  <p className=" hover:text-orange-500 cursor-pointer transition-all text-white mb-4 font-medium text-lg">Consult</p></Link>
          <ul className="text-white">
          <Link  href="../Services/#contact">
          <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
              Contact{" "}
            </li>
          </Link>
          <Link  href="../Services/#getAQuote">
          <li className="my-2 text-white hover:text-orange-500 cursor-pointer transition-all">
              Get a Quote{" "}
            </li>
          </Link>
         
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
