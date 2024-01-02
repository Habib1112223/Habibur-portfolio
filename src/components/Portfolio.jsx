import image1 from "../assets/portfolio/tool-white.jpg";
import image2 from "../assets/portfolio/cover2.jpg";
import image3 from "../assets/portfolio/education.jpg";
// import image4 from "../assets/portfolio/image15.png";
// import image5 from "../assets/portfolio/image16.png";
// import image6 from "../assets/portfolio/image3.jpg";
// import image7 from "../assets/portfolio/image4.png";
// import image8 from "../assets/portfolio/image5.png";
// import image9 from "../assets/portfolio/image6.png";
// import image10 from "../assets/portfolio/image7.png";
// import image11 from "../assets/portfolio/image8.jpeg";
// import image12 from "../assets/portfolio/image9.jpeg";
// import image13 from "../assets/portfolio/scrolling.webp";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: image1,
      href1: "https://tools-sharing-eleven.web.app/",
      href2: "https://github.com/Habib1112223/tools-sharing",
    },
    {
      id: 2,
      src: image2,
      href1:
        "https://technology-and-electroni-a72ab.web.app/",
      href2: "https://github.com/Habib1112223/technology-and-electronics-client",
    },
    {
      id: 3,
      src: image3,
      href1: "https://react-assignmet-nine.web.app/",
      href2: "https://github.com/Habib1112223/Education-course-application",
    },
    // {
    //   id: 4,
    //   src: image4,
    //   href1: "https://github.com/MohiuddinRaki",
    //   href2: "https://github.com/MohiuddinRaki",
    // },
    // {
    //   id: 5,
    //   src: image5,
    //   href1: "https://github.com/MohiuddinRaki",
    //   href2: "https://github.com/MohiuddinRaki",
    // },
    // {
    //   id: 6,
    //   src: image6,
    //   href1: "https://github.com/MohiuddinRaki",
    //   href2: "https://github.com/MohiuddinRaki",
    // },
    // {
    //   id: 7,
    //   src: image7,
    // },
    // {
    //   id: 8,
    //   src: image8,
    // },
    // {
    //   id: 9,
    //   src: image9,
    // },
    // {
    //   id: 10,
    //   src: image10,
    // },
    // {
    //   id: 11,
    //   src: image11,
    // },
    // {
    //   id: 12,
    //   src: image12,
    // },
    // {
    //   id: 13,
    //   src: image13,
    // },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            PROJECTS
          </p>
          <p className="py-6">A Showcase of My Noteworthy Achievements and Projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, href1, href2, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="logo"
                className="w-full h-32 rounded-md hover:scale-105 duration-200"
              />
              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  <a
                    href={href1}
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 hover:scale-105 duration-200">
                  <a
                    href={href2}
                    className="flex justify-between items-center w-full text-white"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;