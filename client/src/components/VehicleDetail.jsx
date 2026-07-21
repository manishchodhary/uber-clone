import "remixicon/fonts/remixicon.css";


function VehicleDetail() {
  return (
    <div className="flex flex-col px-5 py-6 ">
      <h1 className="mb-6 text-center text-2xl font-bold">
        Confirm Your Ride
      </h1>

      <div className="mb-6 flex justify-center">
        <img
          src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy82NDkzYzI1NS04N2M4LTRlMmUtOTQyOS1jZjcwOWJmMWI4MzgucG5n"
          alt="Vehicle"
          className="h-44 w-56 object-contain"
        />
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <div className="flex items-start gap-4 border-b border-gray-200 px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <i className="ri-home-9-fill text-xl"></i>
          </div>

          <div>
            <h2 className="text-base font-semibold">Hostel-19</h2>
            <p className="text-sm text-gray-500">
        NEHU,SHILLONG
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 border-b border-gray-200 px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <i className="ri-map-pin-2-fill text-xl"></i>
          </div>

          <div>
            <h2 className="text-base font-semibold">NEHU Gate No. 2</h2>
            <p className="text-sm text-gray-500">
              Shillong, Meghalaya
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 px-5 py-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
            <i className="ri-cash-line text-xl"></i>
          </div>

          <div>
            <h2 className="text-base font-semibold">₹192</h2>
            <p className="text-sm text-gray-500">Cash Payment</p>
          </div>
        </div>
      </div>

      <button className="mt-6 w-full rounded-xl bg-green-600 py-3 text-lg font-semibold text-white transition hover:bg-green-700">
        Confirm Ride
      </button>
    </div>
  );
}

export default VehicleDetail;
