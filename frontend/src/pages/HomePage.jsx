import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-indigo-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-indigo-800 mb-4">
            Welcome to PayEase
          </h1>
          <p className="text-gray-600">
            Seamless Transfers, Anytime, Anywhere.
          </p>
        </div>
        <div className="flex items-center justify-center  absolute top-10 right-10">
          <button
            className="bg-slate-400 w-full   hover:bg-indigo-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-gray-300  font-thick rounded-xl text-sm px-5 py-3 me-2 mb-2"
            onClick={() => {
              navigate("/signup");
            }}
          >
            {" "}
            Signup
          </button>
          <Button
            onClick={() => {
              navigate("/signin");
            }}
            label="Login"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
