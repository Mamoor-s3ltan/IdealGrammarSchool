import React from "react";
import { useState, useEffect } from "react";
import { FaTwitter, FaInstagram, FaFacebookF, FaUser } from "react-icons/fa";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../redux/authSlice";

const header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const isLogged = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  useEffect(() => {
    const isLoggedInFromStorage = localStorage.getItem("isLoggedIn");
    if (isLoggedInFromStorage === "true") {
      dispatch(login());
    }
  }, []);

  return (
    <>
      <header className="w-full text-sm">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-2 flex justify-between items-center">
          <div className="hidden md:flex gap-4 text-gray-700 font-semibold">
            <span>WELCOME</span>
            <span>CALL +44 300 303 0266</span>
            <span className="flex items-center gap-2">
              FOLLOW US
              <FaTwitter className="cursor-pointer hover:text-[#0cd1c3]" />
              <FaInstagram className="cursor-pointer hover:text-[#0cd1c3]" />
              <FaFacebookF className="cursor-pointer hover:text-[#0cd1c3]" />
            </span>
          </div>
          <div className="flex gap-3">
            {isLogged ? (
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer"
                onClick={handleLogOut}
              >
                <Link
                  className="flex items-center gap-2 justify-center "
                  to={"/login"}
                >
                  {" "}
                  <FaUser className="text-white" />
                  LOGOUT
                </Link>
              </button>
            ) : (
              <button className="bg-[#0cd1c3] text-white px-4 py-2 rounded-full text-sm font-semibold cursor-pointer">
                <Link
                  className="flex items-center gap-2 justify-center "
                  to={"/login"}
                >
                  {" "}
                  <FaUser className="text-Text" />
                  LOGIN
                </Link>
              </button>
            )}
          </div>
        </div>

        {/* Main Navigation */}
        <div className="bg-white px-6 py-4 flex justify-between items-center relative">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-orange-500 rotate-45"></div>
            <h1 className="text-2xl font-bold">
              <span className="text-[#0cd1c3] ">Ideal</span>
              <span className="text-gray-800"> Grammar School</span>
              <span className="text-teal-400">.</span>
            </h1>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 font-bold text-gray-800 text-sm">
            <Link to={"/"} className="text-[#0cd1c3] active:text-Text">
              HOME
            </Link>
            <a className="active:text-Accent" href="#about">
              ABOUT
            </a>
            <a className="active:text-Accent" href="#testimonial">
              TESTIMONIAL
            </a>
            <a className="active:text-Accent" href="#team">
              TEAM
            </a>
          </nav>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-2xl text-gray-800"
            >
              {menuOpen ? <HiX /> : <HiOutlineMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50">
              <nav className="flex flex-col p-4 gap-4 font-bold text-gray-800 text-base">
                <Link to={"/"} className="text-[#0cd1c3] active:text-Text">
                  HOME
                </Link>
                <a className="active:text-Accent" href="#about">
                  ABOUT
                </a>
                <a className="active:text-Accent" href="#testimonial">
                  TESTIMONIAL
                </a>
                <a className="active:text-Accent" href="#team">
                  TEAM
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default header;
