const Contact = () => {
      return (
        <div
          name="contact"
          className="w-full h-screen bg-gradient-to-b from-black to-gray-700 text-white"
        >
          <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
            <div className="pb-8">
              <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                CONTACT
              </p>
              <p className="py-6">Feel free to submit the form below for a direct connection</p>
            </div>
            <div className="flex justify-center items-center">
              <form
                action="https://getform.io/f/1774707a-4923-4bd5-9c1c-d1a638b53502" method="POST"
                className="flex flex-col w-full md:w-1/2"
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Name"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your Email"
                  className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter the Feedback"
                  cols="30"
                  rows="10"
                  className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                ></textarea>
                <button className="text-withe bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
    export default Contact;