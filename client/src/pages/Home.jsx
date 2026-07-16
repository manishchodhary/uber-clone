import logo from "../assets/logo.png"
import background from "../assets/background.avif"
import {Link} from "react-router-dom"
function Home() {

  return (
    <div>
      <div className="h-screen w-full flex justify-between flex-col bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
        <img src={logo} alt="uber" className=" w-15 mt-5 ml-4" />
        <div className="bg-white py-4 px-4 pb-7">
            <h2 className="text-2xl font-bold">Get Started with Uber</h2>
            <Link className="bg-black text-white w-full rounded py-3 mt-2 cursor-pointer inline-block flex justify-center text-center" to={"/login"}>Continue </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
