import logo from "../assets/logo.png";
import image from "../assets/home.mp4";
import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import LocationSearch from "./LocationSearch.jsx";

import VehiclePlane from "./VehiclePlane.jsx";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  const [vehicle, setVehicle] = useState(false);
  const submitHandler = (e) => {};
  return (
    <div>
      <div className="relative h-screen w-full">
        {!isExpanded && (
          <img
            src={logo}
            alt=""
            className="w-18 top-5 left-5 sm:w-22 z-20 absolute"
          />
        )}
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
              isExpanded ? "h-[100%]" : "h-[50%] rounded-t-3xl"
            }`}
          >
            {!vehicle ? (
              <VehiclePlane setVehicle={setVehicle} />
            ) : (
              <>
                <div className="mx-auto mb-4 h-1.5 w-12 rounded-full bg-gray-300"></div>
                <div className="flex justify-between">
                  <div className="flex flex-col">
                    {!isExpanded && (
                      <i
                        className="ri-arrow-left-long-line text-2xl mb-2.5"
                        onClick={() => {
                          setVehicle(false);
                        }}
                      ></i>
                    )}
                    <h2 className="mb-5 text-2xl font-semibold">Find a trip</h2>
                  </div>
                  {isExpanded && (
                    <i
                      className="ri-arrow-down-wide-line text-3xl mb-3  "
                      onClick={() => setIsExpanded(false)}
                    ></i>
                  )}
                </div>
                <form onSubmit={submitHandler} className="relative space-y-4">
                  <div className="absolute left-5 top-[54px] h-14 w-0.5 bg-gray-400"></div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-black"></div>

                    <input
                      type="text"
                      onFocus={() => setIsExpanded(true)}
                      onChange={(e) => {
                        setPickup(e.target.value);
                      }}
                      placeholder="Add a pickup location"
                      className="w-full rounded-xl bg-gray-100 py-3 pl-12 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-black"
                    />
                  </div>

                  <div className="relative">
                    <div className="absolute left-4 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-black bg-white"></div>

                    <input
                      type="text"
                      onFocus={() => setIsExpanded(true)}
                      onChange={(e) => {
                        setDestination(e.target.value);
                      }}
                      placeholder="Enter your destination"
                      className="w-full rounded-xl bg-gray-100 py-3 pl-12 pr-4 outline-none transition-all focus:bg-white focus:ring-2 focus:ring-black"
                    />
                  </div>
                </form>{" "}
              </>
            )}
            {isExpanded && <LocationSearch />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
