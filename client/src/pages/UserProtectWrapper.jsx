import { useContext, useEffect, useState } from "react";
import { userDataContext } from "../context/UserContext.jsx";
import { useNavigate } from "react-router-dom";
import api from "../api/axios.js";

function UserProtectWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(userDataContext);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
    api
      .get("/users/profile")
      .then((response) => {
        if (response.status == 200) {
          const data = response.data;
          setUser(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });
  }, [token]);

  if (loading) {
    return <div className="h-full w-full m-auto flex justify-center text-center"><h1>Loading ...</h1></div>;
  }
  return <>{children}</>;
}

export default UserProtectWrapper;
