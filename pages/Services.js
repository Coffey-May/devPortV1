import { React, useState } from "react";
import ReactMarkdown from "react-markdown";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import { FaCaretRight } from "react-icons/fa";
import useWindowSize from "@rooks/use-window-size";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import Head from "next/head";


const brandIdentity1 = ` We believe that every great software solution should mirror the heart and soul of the brand it represents.
We meticulously dissect your brand's identity - its core values, personality, and visual elements - to understand what makes it unique.•
We create digital experiences that are not only functional but also emotionally engaging.`
const brandIdentity2 = `We leverage our expertise to infuse your brand with the following principles: 
• Consistency: We maintain a consistent look and feel across your software, ensuring that every interaction reinforces your brand's identity.
• Simplicity: We believe that simplicity is the ultimate sophistication. Our designs are elegant, intuitive, and in line with your brand's identity.
• User-Centricity: The user's journey is at the forefront of our design process.
We create experiences that are tailored to your target audience, meeting their needs and expectations.
Emotional Connection: Through thoughtful use of colors, typography, and imagery, we make sure users form a profound emotional connection with your brand.
We craft designs that set you apart from the competition and establish your brand's distinct identity.
Before we embark on any project, we collaborate closely with our clients to understand their brand's DNA and their specific goals.
`;

const logoDesign1 =`Iterative Excellence:
We understand that great logo design is not a destination; it's a journey. With a commitment to excellence, We embrace the iterative process with enthusiasm. Each logo design is a canvas where ideas evolve, refine, and transform, guided by a meticulous attention to detail. Every iteration is a step forward, bringing the design closer to perfection.`
const logoDesign2 = `The Evolution of Design:
We believe in the power of history as a teacher. The evolution of logo design over the years is a treasure trove of inspiration. From the ornate crests of the past to the minimalist masterpieces of today, we draw inspiration from the ever-changing landscape of design, integrating the best of the old and the new.
The Storytelling Aspect:
At the heart of our logo designs lies a deep respect for the art of storytelling. Each logo tells a unique narrative, capturing the essence and identity of the brand it represents. Our designs don't merely look good; they encapsulate the soul of the brand, weaving its history and values into every line and curve.
Balancing Modernity and Tradition:
While we cherish history, the approach to logo design is far from stagnant. By infusing modern trends and cutting-edge techniques, each logo design is a harmonious blend of timeless elegance and contemporary relevance. We understand that the logo should not only honor the past but also resonate with the present.
`
const graphicDesign1 = `
Our design approach begins with a deep commitment to understanding the needs and desires of the end users. User research is the bedrock upon which every project is built. We know that the most engaging designs are born when they resonate with the audience.
User-Centered Creations:We believe that every design is a product of collaboration between the designer's methodology and the user's perspective. By constantly gathering feedback and analyzing user behavior, designs evolve to become intuitive and impactful.`
const graphicDesign2 = `Beyond Aesthetics:
While aesthetics are a crucial element, our designs go beyond mere visual appeal. They are an embodiment of functionality, making the user's interaction with the product or brand effortless and delightful. Each element serves a purpose, enhancing the user's experience.
Crafting Visual Stories: Storytelling through design. Every project is a narrative, where visual language conveys a message, evokes emotions, and establishes connections.
From Concept to Masterpiece:Our approach to graphic design is a marriage of user-centric insight and the creative power of iteration. It's a journey that transcends aesthetics and embodies functionality, where user research and iterative refinement join hands to craft designs that are not just captivating but profoundly effective.

`
const userResearch1 = ` Our approach to design is rooted in a profound understanding of user research, and it's the secret to our ability to stand out in the marketplace. We believe in going beyond the basics, and that's why we delve deep into understanding not just our customers but also our competitors, forging a path that guarantees unique customer experiences and repeat business.
Our customers are at the heart of everything we do. We're not merely designing for them; we're designing with them in mind. Our user research goes beyond demographics. We seek to comprehend their desires, pain points, and aspirations to tailor our designs to their unique needs.
`
const userResearch2 = `Iterative Improvement:
Coffey's approach to user research is ongoing. We don't just research once and forget; we continually adapt and evolve our strategies as market dynamics change and user preferences shift. It's this relentless commitment to improvement that keeps us at the forefront.
Market Dominance Through Uniqueness:
At Coffey, we don't settle for the ordinary. Our user research and insights drive us to stand out in the marketplace. We create designs and experiences that are unparalleled, forging a path to market dominance that leaves our competitors in awe.`

const uiUx = `Pioneering UI/UX Excellence: Redefining Digital Experience
At our design company, we're dedicated to setting the standard for cutting-edge UI/UX. Here's how we do it:
Data-Driven Design: Our designs are informed by data and analytics, ensuring they're not just visually appealing but also highly effective.
User-Centric Approach: Extensive user research guides our designs, ensuring they resonate with your audience.
Responsive & Cross-Platform: We specialize in creating designs that adapt seamlessly to different devices and platforms.
Innovative Prototyping: Rapid prototyping and testing allow for iterative improvements, resulting in a flawless interface.
Micro-Interactions Magic: Captivating micro-interactions add life to your design, creating a memorable user experience.
Trendsetting Designs: We lead in embracing the latest UI/UX innovations, staying ahead of design trends.
Accessibility Priority: Inclusivity and accessibility are at the forefront of our design, reaching a wider audience.
Collaborative Excellence: Your vision and goals are seamlessly integrated into the design process, ensuring a perfect fit for your brand.
Elevate your brand's digital presence with our cutting-edge UI/UX expertise. We promise innovation, usability, and beauty like never before.`

const productDesign1 = `Product design is a creative and innovative process that reflects our commitment to cutting-edge design. The process typically begins with a deep understanding of the client's needs and target audience. Our designers conduct extensive research into current design trends and client requirements.`
const productDesign2 =`
Ideation is a central part of the process, where the design team collaborates to generate fresh and modern concepts. They explore typography, color schemes, and visual elements that align with the client's brand and message. Sketches and mock-ups are created to visualize design possibilities.
Once a concept is approved, We move on to the digital design phase. We use the latest design software and tools to create high-quality visuals and graphics. The team places a strong emphasis on user experience and ensuring that the design remains contemporary and relevant.
Our design process also includes client feedback and revisions to refine the product. The final design is delivered to the client in various formats for implementation. Throughout, we maintain a dedication to staying at the forefront of contemporary design trends and pushing the boundaries of creative expression.`

const frontEnd1 = `Client-side and front-end development at Coffey, our web development and design company, are integral components of our digital solutions. Client-side development is all about creating interactive and responsive user interfaces. Our team of front-end developers focuses on crafting visually appealing and user-friendly websites and applications that align with our clients' branding and user experience goals.
In the client-side development process, we employ a variety of technologies such as HTML, CSS, and JavaScript to bring designs to life. We ensure that websites and applications are accessible, responsive across different devices, and optimized for speed and performance.
`
const frontEnd2 =`
At Coffey, front-end development is not just about code; it's about creating a seamless and engaging user experience. We pay meticulous attention to the layout, typography, and design details that make our clients' digital presence visually compelling and functionally sound. Our front-end developers work in close collaboration with our design and UX teams to ensure a cohesive and visually stunning end product that delivers the best possible user experience.
Our dedication to client-side and front-end development reflects our commitment to helping our clients make a memorable and impactful online impression while providing users with an exceptional and intuitive digital experience.`

const backEnd1 = `
 We specialize in creating the engine that powers web applications and ensures their functionality, security, and scalability.In server-side development, our team focuses on writing server code, handling database interactions, and managing server resources. We employ languages and frameworks such as Python, Ruby on Rails, and Node.js to build the logic behind our applications. Security is a paramount concern, and we implement stringent measures to protect data and user privacy.
`
const backEnd2 =`
Back-end development is about the unseen, but critical, aspects of an application. We manage databases, optimize performance, and ensure seamless communication between the client and server. Scalability is always on our minds, as we design systems that can adapt to growing demands.
At Coffey, we believe that a strong back-end is the backbone of a successful digital product. It allows us to deliver reliable and high-performing software solutions that can evolve and expand with our clients' needs while maintaining the utmost data integrity and security. Our server-side and back-end development expertise guarantees that what users see on the front-end is underpinned by a resilient and efficient infrastructure.`



const servicesData = [
  {
    title: "Brand Identity",
    description1: brandIdentity1,
    description2: brandIdentity2,
    image: "/assets/products.jpeg",
    image2:"/assets/brandIdentity.webp",
    id: "0",
  },
  {
    title: "Design",
    description1: graphicDesign1,
    description2: graphicDesign2,
    image: "/assets/graphicDesign.jpeg",
    image2:"/assets/graphicDesign2.jpeg",
    id: "1",
  },
  {
    title: "Logos",
    description1: logoDesign1,
    description2: logoDesign2,
    image: "/assets/logos.jpeg",
    image2:"/assets/logos2.jpeg",
    id: "2",
  },
  {
    title: "Research",
    description1: userResearch1,
    description2: userResearch2,
    image: "/assets/pexels-lukas-669621.jpg",
    image2:"/assets/pexels-photo-590022.webp",
    id: "3",
  },
  {
    title: "UI/UX",
    description1: uiUx,
    image:"/assets/Screenshot 2023-10-23 at 3.37.09 PM.png",
    id: "4",
  },
  {
    title: "Product Design",
    description1: productDesign1,
    description2: productDesign2,
    image: "/assets/Screenshot 2023-10-24 at 12.44.55 PM.png",
   
    id: "5",
  },
  {
    title: "Front End",
    description1: frontEnd1,
    description2: frontEnd2,
    image:"/assets/james-harrison-vpOeXr5wmR4-unsplash.jpg",
    image2:"/assets/js.svg",
    id: "6",
  },
  {
    title: "Server Side",
    description1: backEnd1,
    description2: backEnd2,
    image:"/assets/nodejs.svg",
    // image2:"/assets/cSharp.png",
    id: "7",
  },
];

const methodData = [
 
  {
    title: "Expectations",
    description: "fsfsdf",
    id: "3",
  },
  {
    title: "Credentials",
    description: "fdfsfdf",
    id: "4",
  },
  {
    title: "Privacy Policy",
    description: "fdfsdf",
    id: "5",
  },
  {
    title: "Terms of Sevice",
    description: "fdsffs",
    id: "6",
  },
];

const consultData = [
  {
    title: "Contact",
    description: "sfsfd",
    id: "1",
  },
  {
    title: "Get a Quote",
    description: "dasdasd",
    id: "2",
  },
];

const Services = () => {
  const [modalShow, setModalShow] = useState(false);
  const [methodModalShow, setMethodModalShow] = useState(false);
  const [indexSelected, setIndexSelected] = useState(null);
  const [methodIndexSelected, setMethodIndexSelected] = useState(null);
  const { innerWidth, innerHeight } = useWindowSize();
  return (
    <div>
      <Head>
      <title>CMStudios</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/astro2float-removebg-preview.png" />
      </Head>
      <Header />
      <div className="text-white   h-full mt-48  markdown pb-48 m-auto max-w-4xl ">
        <div className="  pb-8 mx-20 md:mx:0">
          <strong>
            <p className="lg:text-9xl sm:text-7xl text-6xl pb-8 pt-0">
              SERVICES
            </p>
          </strong>

          {servicesData.map((servicesData, index) => (
            <Disclosure>
              {({ open }) => (
                <div className="flex  ">
                  <Disclosure.Button className="hover:text-orange-500 first-letter:text-2xl text-white  sm:text-6xl md:pt-0 text-3xl pt-2">
                    <div className="flex">
                      <span>{servicesData.title}</span>
                      <FaCaretRight
                        className={`${
                          open ? "rotate-90 transform mt-2" : ""
                        } md:h-16 md:w-16 pt-2 text-white`}
                      />
                    </div>

                    <Disclosure.Panel className=" h-max columns-1 md:columns-2 text-slate-200 text-left font-extralight text-sm md:text-xl pb-20 pt-4 indent-20">
                      {servicesData.description1}
                      <Image
                      className="py-6 m-auto"
                        src={servicesData.image}
                        object-fit="cover"
                        width={500}
                        height={200}
                        alt="Brand Identity vin diagram"
                      />
                      <div className="indent-20 whitespace-pre-line">
                        {servicesData.description2}
                      </div>
                      {servicesData.image2?   <Image
                      className="py-6 m-auto"
                        src={servicesData.image2}
                        object-fit="cover"
                        width={500}
                        height={200}
                        alt="Brand Identity vin diagram"
                      />:null}
                   
                    </Disclosure.Panel>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure>
          ))}
        </div>

        <div className="  pb-8 mx-20 md:mx:0">
          <strong>
            <p className="lg:text-9xl sm:text-7xl text-6xl pb-8 pt-0">METHOD</p>
          </strong>
          {methodData.map((methodData, index) => (
            <Disclosure>
              {({ open }) => (
                <div className="flex  ">
                  <Disclosure.Button className="hover:text-orange-500 first-letter:text-2xl text-white  sm:text-6xl md:pt-0 text-3xl pt-2">
                    <div className="flex">
                      <span>{methodData.title}</span>
                      <FaCaretRight
                        className={`${
                          open ? "rotate-90 transform mt-2" : ""
                        } md:h-16 md:w-16 pt-2 text-white`}
                      />
                    </div>

                    <Disclosure.Panel className="text-slate-200 columns-1 md:columns-2 text-left font-extralight text-sm md:text-xl pb-20 pt-4 indent-20">
                      
                      {methodData.description}
                    </Disclosure.Panel>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure>
          ))}
        </div>

        <div className="  pb-8 mx-20 md:mx:0">
          <strong>
            <p className="lg:text-9xl sm:text-7xl text-6xl pb-8 pt-0">
              CONSULT
            </p>
          </strong>

          {consultData.map((consultData, index) => (
            <Disclosure>
              {({ open }) => (
                <div className="flex  ">
                  <Disclosure.Button className="hover:text-orange-500 first-letter:text-2xl text-white  sm:text-6xl md:pt-0 text-3xl pt-2">
                    <div className="flex">
                      <span>{consultData.title}</span>
                      <FaCaretRight
                        className={`${
                          open ? "rotate-90 transform mt-2" : ""
                        } md:h-16 md:w-16 pt-2 text-white`}
                      />
                    </div>

                    <Disclosure.Panel className="columns-1 md:columns-2 text-slate-200 text-left font-extralight text-sm md:text-xl pb-20 pt-4 indent-20">
                      {consultData.description}
                    </Disclosure.Panel>
                  </Disclosure.Button>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
