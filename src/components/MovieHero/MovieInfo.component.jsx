import React, { useContext, useState } from "react";

// components
import PaymentModal from "../PaymentModal/Payment.component";

// Context
import { MovieContext } from "../../context/movie.context";

const MovieInfo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [price, setPrice] = useState(0);

  const { movie } = useContext(MovieContext);

  // optional chaining.
  const genres = movie.genres?.map(({ name }) => name).join(", ");

  const rentMovies = () => {
    setIsOpen(true);
    setPrice(149);
  };

  const buyMovies = () => {
    setIsOpen(true);
    setPrice(599);
  };

  return (
    <>
      <PaymentModal setIsOpen={setIsOpen} isOpen={isOpen} price={price} />
      <div className="flex flex-col gap-3 lg:gap-6">
        <div className="flex items-center gap-3 md:px-1">
          <div className="w-22 h-5">
            <img
              src="https://in.bmscdn.com/moviemode/tvod/premiere-tag.png"
              alt="premier"
              className="w-full h-full"
            />
          </div>
          <span className="bg-bmshow-400 py-0.5 px-1.5 text-xs text-white rounded-full">
            Streaming now
          </span>
        </div>
        <h1 className="text-white lg:text-5xl font-bold hidden lg:block ">
          {movie.original_title}
        </h1>
        <div className="flex flex-col-reverse gap-3 lg:gap-6 lg:flex-col">
          <div className="text-white flex flex-col gap-3 md:px-2">
            <h4>4k • {movie.original_language} • <span className="text-bmshow-900">Subtitles(2) , {movie.popularity}+ views</span></h4>
            <h4>
               {(movie.runtime / 60).toFixed(2)}h • {genres} • {movie.release_date}
            </h4>
          </div>
          <div className="flex items-center gap-4 md:px-1 md:w-screen lg:w-full">
            <button
              onClick={rentMovies}
              className="bg-bmshow-900 w-full py-3 text-white font-semibold rounded-lg"
            >
              Rent ₹149
            </button>
            <button
              onClick={buyMovies}
              className="bg-bmshow-900 w-full py-3 text-white font-semibold rounded-lg"
            >
              Buy ₹599
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;   
