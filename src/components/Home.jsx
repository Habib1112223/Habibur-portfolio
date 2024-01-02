/* eslint-disable react/no-unescaped-entities */
import { FaArrowRightLong } from "react-icons/fa6";

import heroImage from "../assets/portfolio/Habibur.jpg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black 
      via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a React Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Recently I can capable explore various react projects by using tailwind CSS,firebase,daisy Ui.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-withe bg-gradient-to-b from-cyan-500 to-blue-500  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md cursor-pointer"
            >
              PROJECTS
              <span className="group-hover:rotate-90 duration-200">
                <FaArrowRightLong className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            className="mx-auto rounded-3xl w-2/3  md:w-full"
            src={heroImage}
            alt="my profile"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;