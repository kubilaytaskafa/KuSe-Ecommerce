import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-md ">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold cursor-pointer">
          <h3 onClick={() => navigate("/")}>KUSE</h3>
        </div>
        <div className="relative flex-1 mx-4 ">
          <form>
            <input
              type="text"
              placeholder="Search"
              className="w-full border py-2 px-4 outline-none"
            />
            <FaSearch className="absolute top-3 right-3 text-red-500" />
          </form>
        </div>

        <div className="flex items-center space-x-4">
          <FaShoppingBag
            className="text-lg cursor-pointer"
            onClick={() => navigate("/card")}
          />
          <button className="hidden md:block">Login|Register</button>
          <button className="block md:hidden">
            <FaUser className="cursor-pointer" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <h6
          className="hover:underline cursor-pointer"
          onClick={() => navigate("/")}
        >
          Home
        </h6>
        <h6
          className="hover:underline cursor-pointer"
          onClick={() => navigate("/shop")}
        >
          Shop
        </h6>
        <h6
          className="hover:underline cursor-pointer"
          onClick={() => navigate("/contact")}
        >
          Contact
        </h6>
        <h6
          className="hover:underline cursor-pointer"
          onClick={() => navigate("/about")}
        >
          About
        </h6>
      </div>
    </nav>
  );
};

export default Navbar;
