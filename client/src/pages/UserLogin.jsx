import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { userDataContext } from "../context/UserContext.jsx";
function UserLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const { user, setUser } = useContext(userDataContext);
  const navigate = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    setUserData({
      email: email,
      password: password,
    });

    const respones = await api.post("/user/login", userData);
    if (respones.status == 200) {
      const data = respones.data;
      setUser(data.user);
      localStorage.setItem("token", data.token);
      navigate("/home");
    }
  }

  return (
    <div className="flex h-screen w-full justify-center items-center mt-5">
      <form
        className="flex flex-col  text-black px-10 py-10 rounded "
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <h3 className="text-xl mb-2">Enter the email</h3>
        <input
          required
          type="email"
          placeholder="email@example.com"
          onChange={(e) => {
            e.target.value;
          }}
          className="px-4 py-2"
        />
        <h3 className="text-xl">Enter your password</h3>
        <input
          required
          type="password"
          placeholder="password"
          onChange={(e) => {
            e.target.value;
          }}
          className="px-4 py-2"
        />
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default UserLogin;
