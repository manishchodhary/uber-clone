import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/axios";
import { userDataContext } from "../context/UserContext.jsx";

function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();

    try {
      const response = await api.post("/user/login", {
        email,
        password,
      });
      if(response.status==200){
      const data = response.data;

      setUser(data.user);

      localStorage.setItem("token", data.token);

      navigate("/home");}
      setEmail('')
      setPassword('')

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
      {/* Login Card */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <form onSubmit={submitHandler}>
          <h2 className="text-3xl font-bold text-center">Welcome Back</h2>

          <p className="text-center text-gray-500 mt-2 mb-8">
            Log in to continue
          </p>

          {/* Email */}
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

          {/* Password */}
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-semibold text-white transition hover:bg-gray-900"
          >
            Log In
          </button>
        </form>

        {/* Signup Link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          New here?{" "}
          <Link
            to="/signup"
            className="font-medium text-blue-600 transition hover:text-blue-700 hover:underline"
          >
            Create an account
          </Link>
        </p>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="h-px flex-1 bg-gray-300"></div>

          <span className="mx-4 text-sm text-gray-500">OR</span>

          <div className="h-px flex-1 bg-gray-300"></div>
        </div>

        {/* Captain Login */}
        <Link
          to="/captain-login"
          className="block w-full rounded-lg bg-green-600 py-3 text-center font-semibold text-white transition hover:bg-green-700"
        >
          Continue as Captain
        </Link>
      </div>
    </div>
  );
}

export default UserLogin;
