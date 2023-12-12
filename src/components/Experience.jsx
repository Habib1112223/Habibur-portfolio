/* eslint-disable react/no-unescaped-entities */

import react from "../assets/portfolio/React.png";
import nodejs from "../assets/portfolio/Nodejs.png";
import mongodb from "../assets/portfolio/MongoDB.png";
import jwt from "../assets/portfolio/JWT.png";
import tailwind from "../assets/portfolio/Tailwind.png";
import firebase from "../assets/portfolio/Firebase.png";
import express from "../assets/portfolio/Express.png";
import js from "../assets/portfolio/js.jpeg";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      src: react,
      title: "React",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: firebase,
      title: "Firebase",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: jwt,
      title: "Jwt",
      style: "shadow-orange-500",
    },
    {
      id: 5,
      src: js,
      title: "JS",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: mongodb,
      title: "Mongodb",
      style: "shadow-sky-500",
    },
    {
      id: 7,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-red-500",
    },
    {
      id: 8,
      src: express,
      title: "Express",
      style: "shadow-pink-500",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Skils
          </p>
          <p className="py-6">These are technologies I've worked with</p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 py-12 text-center">
          {experiences.map(({ id, title, src, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-300 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="logo" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
