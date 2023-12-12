/* eslint-disable react/no-unescaped-entities */
const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl mt-12 font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl md:mt-20">
          Hi I'am Md. Mohiuddin. I'm a front-end web developer in Dhaka,
          Bangladesh.I loves working with the MERN stack. It stands for MongoDB
          (where we store data), Express.js (helps with server-side work), React
          (for making cool and interactive web pages), and Node.js (for building
          scalable and efficient server-side applications). I enjoy creating
          websites that look great and work smoothly. I'm always learning about
          the latest in web development to make sure I use the best tools.
          Excited to bring my skills to interesting projects and make awesome,
          user-friendly websites!I am a versatile developer with a B.Sc in
          Physics from Govt. titumir College, Dhaka, graduating in 2022.
        </p>
        <br />
      </div>
    </div>
  );
};

export default About;
