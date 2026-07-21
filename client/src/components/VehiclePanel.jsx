import { useState } from "react";
import "remixicon/fonts/remixicon.css";
import VehicleDetail from "./VehicleDetail.jsx";

function VehiclePanel(props) {
  const [selectVehical, setSelectVehical] = useState(false);
  return selectVehical ? (
    <VehicleDetail />
  ) : (
    <div className="mx-4 mt-4">
      {!props.isExpanded && (
        <i
          className="ri-arrow-left-long-line text-3xl mb-2"
          onClick={() => {
            props.setVehicle(false);
            props.setIsExpanded(true);
          }}
        ></i>
      )}
      <h1 className="mb-3 text-xl font-semibold">Choose Ride</h1>

      <div
        onClick={() => setSelectVehical(true)}
        className="flex cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm transition-all hover:border-black"
      >
        <div className="flex items-center gap-2">
          <img
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=921/height=520/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mOTQ1M2M1MC00YjQwLTQ1MjctYWM3OC01ZDA3MTRiZTM4NjYucG5n"
            alt="UberGo"
            className="h-12 w-12 object-contain"
          />

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold">UberGo</h2>
              <span className="flex items-center text-xs text-gray-600">
                <i className="ri-user-3-fill mr-1"></i>4
              </span>
            </div>

            <p className="text-xs text-gray-500">2 min away</p>
            <p className="text-xs text-gray-700">Affordable, compact rides</p>
          </div>
        </div>

        <h2 className="text-lg font-bold">₹163</h2>
      </div>

      <div
          onClick={() => setSelectVehical(true)}
        className="mt-2 flex cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm transition-all hover:border-black"
      >
        <div className="flex items-center gap-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9DGxLQpK0EBL8NxLTYCPHR0FiHhU8vxOYJkY1lYV026zlrxK0E-do9zU&s=10"
            alt="UberMoto"
            className="h-12 w-12 object-contain"
          />

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold">UberMoto</h2>
              <span className="flex items-center text-xs text-gray-600">
                <i className="ri-user-3-fill mr-1"></i>2
              </span>
            </div>

            <p className="text-xs text-gray-500">2 min away</p>
            <p className="text-xs text-gray-700">Affordable, compact rides</p>
          </div>
        </div>

        <h2 className="text-lg font-bold">₹93</h2>
      </div>

      <div
         onClick={() => setSelectVehical(true)}
        className="mt-2 flex cursor-pointer items-center justify-between rounded-xl border border-gray-300 bg-white px-3 py-2 shadow-sm transition-all hover:border-black"
      >
        <div className="flex items-center gap-2">
          <img
            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=552/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy9mYzEwMWZmOC04MWExLTQ2YzMtOTk1YS02N2I0YmJkMmYyYmYuanBn"
            alt="UberAuto"
            className="h-12 w-12 object-contain"
          />

          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-semibold">UberAuto</h2>
              <span className="flex items-center text-xs text-gray-600">
                <i className="ri-user-3-fill mr-1"></i>3
              </span>
            </div>

            <p className="text-xs text-gray-500">2 min away</p>
            <p className="text-xs text-gray-700">Affordable, compact rides</p>
          </div>
        </div>

        <h2 className="text-lg font-bold">₹125</h2>
      </div>
    </div>
  );
}

export default VehiclePanel;
