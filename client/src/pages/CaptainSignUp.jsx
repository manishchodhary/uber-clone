import { useState } from "react";
import { Link } from "react-router-dom";

function CaptainSignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");

  async function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5 py-10">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center">Create Captain Account</h1>
        <p className="mt-2 text-center text-gray-500">
          Sign up to start accepting rides
        </p>

        <form onSubmit={submitHandler} className="mt-8 space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium">
                First Name
              </label>
              <input
                type="text"
                required
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium">
                Last Name
              </label>
              <input
                type="text"
                required
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="email@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <h2 className="mb-4 text-lg font-semibold">Vehicle Details</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Vehicle Color
                </label>
                <input
                  type="text"
                  required
                  placeholder="White"
                  value={vehicleColor}
                  onChange={(e) => setVehicleColor(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Vehicle Plate
                </label>
                <input
                  type="text"
                  required
                  placeholder="ML 05 AB 1234"
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Vehicle Capacity
                </label>
                <input
                  type="number"
                  required
                  min="1"
                  placeholder="4"
                  value={vehicleCapacity}
                  onChange={(e) => setVehicleCapacity(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium">
                  Vehicle Type
                </label>
                <select
                  required
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
                >
                  <option value="">Select Vehicle</option>
                  <option value="car">Car</option>
                  <option value="bike">Bike</option>
                  <option value="auto">Auto</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Create Account
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/captain-login"
            className="font-medium text-blue-600 hover:text-blue-700 hover:underline"
          >
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default CaptainSignUp;