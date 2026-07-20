import logo from "../assets/logo.png";
import image from "../assets/home.mp4";
import { useState } from "react";
function Home() {
  
  const [isExpanded, setIsExpanded] = useState(false);
  const submitHandler = (e) => {};
  return (
    <div>
      <div className="relative h-screen w-full">
       {isExpanded?<></>: <img
          src={logo}
          alt=""
          className="w-18 top-5 left-5 sm:w-22 z-20 absolute"
        />}
        <div className="h-screen w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src={image} />
          </video>
<div
  className={`absolute bottom-0 z-10 w-full  bg-white px-5 pt-3 shadow-2xl transition-all duration-300 ${
    isExpanded ? "h-[100%]" : "h-[30%] rounded-t-3xl"
  }`}
>
  <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300"></div>

  <h2 className="mb-5 text-2xl font-semibold">
    Find a trip
  </h2>

  <form onSubmit={submitHandler} className="relative space-y-4">
    <div className="absolute left-5 top-[54px] h-14 w-0.5 bg-gray-400"></div>

    <div className="relative">
      <div className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-black"></div>

      <input
        type="text"
        onFocus={() => setIsExpanded(true)}
        placeholder="Add a pickup location"
        className="w-full rounded-xl bg-gray-100 py-3 pl-12 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-black"
      />
    </div>

    <div className="relative">
      <div className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-black bg-white"></div>

      <input
        type="text"
        onFocus={() => setIsExpanded(true)}
        placeholder="Enter your destination"
        className="w-full rounded-xl bg-gray-100 py-3 pl-12 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-black"
      />
    </div>

    {isExpanded && (
      <button
        type="button"
        onClick={() => setIsExpanded(false)}
        className="mt-6 w-full rounded-xl bg-black py-3 font-semibold text-white transition hover:bg-gray-800"
      >
        Close
      </button>
    )}
  </form>
</div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
