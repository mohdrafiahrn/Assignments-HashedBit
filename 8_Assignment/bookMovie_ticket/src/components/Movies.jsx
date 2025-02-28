import React from "react";

import Slider from "./Slider";
import { useNavigate } from "react-router-dom";
import { useMovie } from "../context/MovieContext";



const Movies = () => {

  const { movies, setSelectedMovie } = useMovie()

  const navigate = useNavigate()

  const showMovieDetailPage = (movie) => {
    setSelectedMovie(movie);
    navigate(`/movie/${movie.id}`);
  }

  return (
    <div>
      <Slider />
      <div className="w-screen min-h-screen text-white p-10">


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Movie 1 */}
          {movies.map((movie) => (
            <div key={movie.id}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:scale-105 cursor-pointer"
              onClick={() => showMovieDetailPage(movie)}>
              <img src={movie.image} alt="" className="w-60 h-80 object-cover rounded-md shadow shadow-gray-300" />
              <div className="flex justify-center items-center flex-col">
                <span className="text-[15px] font-semibold mt-3" title={movie.title}>{movie.title}</span>
                <button style={{ color: "white", backgroundColor: "gray" }} class="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mt-2 w-[100%]" onClick={() => showMovieDetailPage(movie)}>Book Now</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Movies;
