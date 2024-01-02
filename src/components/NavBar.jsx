import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navLinks = [
    {
      id: 1,
      link: "home",
      link2: "Home",
    },
    {
      id: 2,
      link: "about",
      link2: "About",
    },
    {
      id: 3,
      link: "portfolio",
      link2: "Projects",
    },
    {
      id: 4,
      link: "experience",
      link2: "Skils",
    },
    {
      id: 5,
      link: "contact",
      link2: "Contact",
    },
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 text-white bg-black px-4 fixed opacity-90">
      <div>
        <h1 className="text-4xl ml-2 font-signature">Habibur</h1>
      </div>
      <ul className="hidden md:flex ">
        {navLinks.map(({ link, link2, id }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 hover:underline"
          >
            <Link to={link} smooth duration={500}>
              {link2}
            </Link>
          </li>
        ))}
      </ul>
      {/* dropdown  */}
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full left-0 h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navLinks.map(({ link, id }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-2xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
