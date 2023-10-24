import { useState, useEffect, Fragment } from "react";
import ButtonOutline from "./misc/ButtonOutline";
import Image from "next/image";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import ReactDOM from "react-dom";
// import Modal from "react-modal";
import Modal from "./Modal";

import { useRouter } from "next/router";

const paintings = [
  {
    id: 1,
    title: `Brooklyn Diner •NFS•`,
    medium: `Oil on board`,
    image: `/assets/PBrooklyndiner.jpeg`,
  },
  {
    id: 2,
    title: `Fruits`,
    medium: `Oil on paper`,
    image: `/assets/PApple.jpeg`,
  },
  {
    id: 3,
    title: `The Pheasant •NFS•`,
    medium: `Oil on canvas`,
    image: `/assets/PAccelerator.jpeg`,
  },
  {
    id: 4,
    title: `Trinkets`,
    medium: `Acrylic on canvas`,
    image: `/assets/PTrinkets.jpeg`,
  },
  {
    id: 5,
    title: `Butterfly`,
    medium: `Oil on canvas`,
    image: `/assets/PButterfly.jpeg`,
  },
  {
    id: 6,
    title: `Cherries`,
    medium: `Oil on board`,
    image: `/assets/PCherries.jpeg`,
  },
  { id: 7, title: `Frog`, medium: `Oil on board`, image: `/assets/PFrog.jpeg` },
  {
    id: 8,
    title: `Consume`,
    medium: `Oil on canvas`,
    image: `/assets/PProducts.jpeg`,
  },
  {
    id: 9,
    title: `Dandelion •NFS•`,
    medium: `Oil on paper`,
    image: `/assets/PDandelion.jpeg`,
  },
  {
    id: 10,
    title: `Chinatown`,
    medium: `Acrylic on canvas`,
    image: `/assets/PChinatownbangkok.jpeg`,
  },

  {
    id: 11,
    title: `Bird`,
    medium: `Oil on canvas`,
    image: `/assets/PBird.jpeg`,
  },
  {
    id: 12,
    title: `The Fly •NFS•`,
    medium: `Oil on paper`,
    image: `/assets/PFly.jpeg`,
  },
  {
    id: 13,
    title: `Cheeseburger`,
    medium: `Oil on paper`,
    image: `/assets/PBurger.jpeg`,
  },
  { id: 14, title: `Cow`, medium: `Oil on canvas`, image: `/assets/PCow.jpeg` },
  {
    id: 15,
    title: `Froggy`,
    medium: `Oil on paper`,
    image: `/assets/PFroggy.jpeg`,
  },
  {
    id: 16,
    title: `Harem of Saturn`,
    medium: `Oil on canvas`,
    image: `/assets/PHos.jpeg`,
  },
  {
    id: 17,
    title: `Gummy Worms`,
    medium: `Oil on board`,
    image: `/assets/PGummyworms.jpeg`,
  },
  {
    id: 18,
    title: `Lady Bug`,
    medium: `Oil on paper`,
    image: `/assets/PLadybug.jpeg`,
  },
  {
    id: 19,
    title: `Homeless`,
    medium: `Oil on canvas`,
    image: `/assets/PHomeless.jpeg`,
  },
  {
    id: 20,
    title: `Liberty`,
    medium: `Oil on canvas`,
    image: `/assets/PLiberty.jpeg`,
  },

  {
    id: 21,
    title: `Party Night`,
    medium: `Oil on paper`,
    image: `/assets/PTrashley.jpeg`,
  },
  {
    id: 22,
    title: `Photo-Negative House`,
    medium: `Oil on canvas`,
    image: `/assets/PNegativeHouse.jpeg`,
  },
  {
    id: 23,
    title: `Hall of Neptune`,
    medium: `Oil on canvas`,
    image: `/assets/PNeptune.jpeg`,
  },
  {
    id: 24,
    title: `Night Ride`,
    medium: `Oil on canvas`,
    image: `/assets/PNightride.jpeg`,
  },
  {
    id: 25,
    title: `Orange`,
    medium: `Oil on paper`,
    image: `/assets/POrange.jpeg`,
  },
  {
    id: 26,
    title: `Peppermint Mustard`,
    medium: `Oil on canvas`,
    image: `/assets/PPeppermintmustard.jpeg`,
  },
  {
    id: 27,
    title: `Science`,
    medium: `Oil on canvas`,
    image: `/assets/PPills.jpeg`,
  },
  {
    id: 28,
    title: `River`,
    medium: `Oil on paper`,
    image: `/assets/PLandscape.jpeg`,
  },
  {
    id: 29,
    title: `Girl in tree`,
    medium: `Oil on canvas`,
    image: `/assets/PRedhair.jpeg`,
  },
  {
    id: 30,
    title: `Spider •NFS•`,
    medium: `Oil on canvas`,
    image: `/assets/PSpider.jpeg`,
  },

  {
    id: 31,
    title: `The Peacock`,
    medium: `Oil on canvas`,
    image: `/assets/PPeacock.jpeg`,
  },
  {
    id: 32,
    title: `Teeth •NFS•`,
    medium: `Oil on board`,
    image: `/assets/PTeeth.jpeg`,
  },
  {
    id: 33,
    title: `Tokyo Night Ride`,
    medium: `Oil on canvas`,
    image: `/assets/PTokyo.jpeg`,
  },
  {
    id: 34,
    title: `Girl and Tree`,
    medium: `Oil on paper`,
    image: `/assets/PTreegirl.jpeg`,
  },
  {
    id: 35,
    title: `Vaporwave`,
    medium: `Oil on paper`,
    image: `/assets/PVapor.jpeg`,
  },
  {
    id: 36,
    title: `Sister`,
    medium: `Oil on canvas`,
    image: `/assets/PSister.jpeg`,
  },
  {
    id: 37,
    title: `The Dream`,
    medium: `Colored pencils on matboard`,
    image: `/assets/PDream.jpeg`,
  },
  {
    id: 38,
    title: `The Loop`,
    medium: `Oil on door`,
    image: `/assets/PLoopgirl.jpeg`,
  },

  // { id: 39, title: `Girl in tree`, medium: `Oil on canvas`, image: `/assets/PRedhair.jpeg` },
  // { id: 40, title: `Spider`, medium: `Oil on canvas`, image: `/assets/PSpider.jpeg` },
];

const Art = () => {
  const [artSearch, setArtSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [medium, setMedium] = useState("");

  return (
    <div className="pb-36 shadow-lg  text-gray-200 mt-16  rounded-xl p-8 ">
      <p className=" text-4xl font-extrabold pb-8 text-left" >PAINTINGS</p>
      <input
      className=" block mb-8 lg:w-4/12 md:w-6/12 sm:w-10/12 xs:w-full font-medium tracking-wide py-2 px-5 sm:px-8   bg-white-500 outline-none rounded-lg"
        type="text"
        value={artSearch}
        onChange={(e) => setArtSearch(e.target.value)}
      />
      <div className=" grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 px-auto  gap-12  py-8 lg:py-12 lg:pb-0  ">
        {paintings
          .filter((p) => p.title.toLowerCase().includes(artSearch))
          .map((m) => (
            <div
              id="between"
              key={m.id}
              class=" justify-self-center flex flex-col space-between h-full  max-w-sm border  rounded-lg shadow dark:bg-gray "
            >
              <div>
                <img
                  id="paint-size"
                  width="0"
                  height="0"
                  className="w-96 h-96 object-cover m-auto pt-12  rounded-t-lg"
                  src={m.image}
                  alt=""
                />
              </div>
              <div class="p-5">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-gray-200">
                  {" "}
                  {m.title}
                </h5>

                <p class="mb-3 font-normal text-gray-400 dark:text-gray-400">
                  {m.medium}
                </p>
                <div className="flex flex-col w-full justify-center mb-4 flex-none mt-12">
                  <button onClick={() => {setShowModal(true);console.log(m);setTitle(m.title);setImage(m.image); setMedium(m.medium)}}>
                    <ButtonOutline>View</ButtonOutline>
                  </button>
     
                </div>
              </div>
            </div>
          ))}
                       {showModal ? (

<Modal  medium={medium} title={title} image={image} setShowModal={setShowModal}/>

  ) : null}
      </div>
    </div>
  );
};

export default Art;
