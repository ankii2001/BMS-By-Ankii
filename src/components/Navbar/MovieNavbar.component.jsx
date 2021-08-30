import React, { useContext } from "react"
import { Link } from "react-router-dom";

import {HiChevronRight, HiMenu,HiOutlineShare} from "react-icons/hi"
import {BsSearch, BsCaretDownFill} from "react-icons/bs"

// Context
import { MovieContext } from "../../context/movie.context";

const NavSm = () => {

  const { movie } = useContext(MovieContext);

    return(
        <>
            <div className= "text-white flex items-center justify-between">
                <div>
                    <h3 className="text-xl font-bold">
                        It All starts Here!
                    </h3>
                </div>
                <div className="w-8 h-8 text-gray-400">
                    <HiOutlineShare className="w-full h-full"/>
                </div>
            </div>
        </>
    );
};
const NavLg = () => {
    return (
    <>
    <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2 gap-4">
          <div className="w-36 h-8 mr-1 ml-2.5 ">
          <Link to="/">
            <img
              src="data:image/png;base64,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"
              alt="logo"
              className="w-full h-full"
            />
          </Link>
          </div>
          <div className="w-full text-gray-800 text-sm flex items-center gap-2.5 bg-white px-2.5 py-2 rounded">
            <BsSearch className="text-gray-700" />
            <input
              type="search"
              className="w-full bg-transparent border-none focus:outline-none"
              placeholder=" Search for Movies, Events, Plays, Sports and Activities."
            />
          </div>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-gray-200 text-sm flex items-center cursor-pointer hover:text-white">
            NCR <BsCaretDownFill className="text-white text-xs ml-1" />
          </span>
          <button className="bg-bmshow-900 text-white px-4 py-1 text-xs rounded">
            Sign in
          </button>
          <div className="w-7 h-7 text-gray-300">
            <HiMenu className="w-full h-full" />
          </div>
        </div>
      </div>
    </>
    );
};
const MovieNavbar = () => {
    return (
        <>
            <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative lg:bg-bmshow-700 p-3.5">
                <div className="md:hidden">{/* Mobile Screen */}
                    <NavSm/>
                </div>
                <div className="hidden md:block lg:hidden">{/* Medium/tab Screen */}
                    <NavSm/>
                </div>
                <div className="hidden w-full lg:flex">{/* Large Screen */}
                    <NavLg/>
                </div>
            </nav>
            <nav className="hidden lg:flex bg-bmshow-800 p-2.5">
            <div className="flex mr-48">
            <span className="text-gray-300 text-sm flex items-center ml-12 cursor-pointer hover:text-white">
            Movies
            </span>
            <span className="text-gray-300 text-sm flex items-center ml-5 cursor-pointer hover:text-white">
            <div className="absolute text-bmshow-900 text-xs top-16 left-40">new</div>
            Stream
            </span>
            <span className="text-gray-300 text-sm flex items-center ml-6 cursor-pointer hover:text-white">
            Events
            </span>
            <span className="text-gray-300 text-sm flex items-center ml-6 cursor-pointer hover:text-white">
            Plays
            </span>
            <span className="text-gray-300 text-sm flex items-center ml-6 cursor-pointer hover:text-white">
            Sports
            </span>
            <span className="text-gray-300 text-sm flex items-center ml-6 cursor-pointer hover:text-white">
            Activities
            </span>
            <span className="text-gray-300 text-sm flex items-center ml-6 cursor-pointer hover:text-white">
            Buzz
            </span>
            </div>
            <div className="flex ml-80">
            <span className="text-white text-xs flex items-center ml-5 cursor-pointer ">
            <div className="absolute text-bmshow-900 text-xs ml-16 top-16">new</div>
            ListYourShow
            </span>
            <span className="text-white text-xs flex items-center ml-6 cursor-pointer ">
            Corporates
            </span>
            <span className="text-white text-xs flex items-center ml-6 cursor-pointer ">
            Offers
            </span>
            <span className="text-white text-xs flex items-center ml-6 cursor-pointer ">
            Gift Cards
            </span>
            </div>
            </nav>
        
        </>
    );
};

export default MovieNavbar;