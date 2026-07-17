import { useContext, useState } from "react";
import { userDataContext } from "../context/UserContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios.js";

function UserSignup() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventdefault();
    const newUser = {
      fullname: { firstname: firstname, lastname: lastname },
      email: email,
      password: password,
    };

    const response = api.post("/users/register", newUser);
    if (response.status == 201) {
      const data = response.data;
      localStorage.setItem("token", data.token);
      setUser(data);
      navigate("/home");
    }
    setEmail("");
    setLastName("");
    setFirstName("");
    setPassword("");
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={submitHandler}>
          <h2 className="text-3xl font-bold text-center">
            Create your account
          </h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Sign up to get started
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                First Name
              </label>

              <input
                type="text"
                required
                placeholder="Frist Name"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Last Name
              </label>

              <input
                type="text"
                required
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 bg-gray-100 px-4 py-3 outline-none transition focus:border-black focus:ring-2 focus:ring-black"
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
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

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
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
            to="/login"
            className="font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
          >
            Log in
          </Link>
        </p>

        <div className="my-6 flex items-center"></div>
      </div>
    </div>
  );
}

export default UserSignup;
