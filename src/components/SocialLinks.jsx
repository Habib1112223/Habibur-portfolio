import { FaGithub, FaLinkedin, FaVoicemail } from "react-icons/fa";
import { GrResume } from "react-icons/gr";
// import Resume from "../assets/myResume.pdf"


const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/mohammad-mohiuddin-0073572a4",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/MohiuddinRaki",
    
    },
    {
      id: 3,
      child: (
        <>
          E-Mail <FaVoicemail size={30} />
        </>
      ),
      href: "mailto:mohammadmohiuddin3490@gmail.com",
     
    },
    {
      id: 4,
      child: (
        <>
          Resume <GrResume />
        </>
      ),
      href: "/public/My Resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {
            links.map(({id,child,href,style,download})=>(
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
                <a
                  href={href}
                  className="flex justify-between items-center w-full text-white"
                  download={download}
                  target="_blank"
                  rel="noreferrer"
                >
               {child}
                </a>
              </li>
            ))
        }
       
      </ul>
    </div>
  );
};

export default SocialLinks;