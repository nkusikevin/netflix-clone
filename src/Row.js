import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
const base_url = "https://images.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailer] = useState("");
  useEffect(() => {
    //this useEffecct will be trigered each time we make requist on database
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      //  console.log(request);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.log(movies);
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const handleclick = (movie) => {
    console.log(movie);
    if (trailerUrl != "") {
      setTrailer("");
    } else {
      movieTrailer(movie)
        //   movieTrailer(movie?.orginal_name || "")
        .then((url) => {
          //   console.log(movie.original_name);
          const urlparams = new URLSearchParams(new URL(url).search);
          setTrailer(urlparams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="row_posters">
        {/* movies poster */}
        {movies.map((movie) => (
          <img
            className={`row_poster ${isLargeRow && "row_posterLarge"} `}
            onClick={() =>
              handleclick(movie.name || movie.title || movie.orginal_name)
            }
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.original_name}
          />
        ))}
      </div>
      {trailerUrl != "" && <YouTube videoId={trailerUrl} opts={opts} />}
      {/* {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />} */}
    </div>
  );
}

export default Row;
