/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./row.module.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [fetchUrl]);

  const tarilerClicked = (movie) => {
    console.log(movie);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div>
      <div className={styles.row}>
        <h2>{title}</h2>
        <div className={styles.row_posters}>
          {movie?.map((movie, index) => (
            <img
              onClick={() => tarilerClicked(movie)}
              key={index}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name || movie.title|| movie.original_name}
              className={`${styles.row_poster} ${
                isLargeRow && styles.row_posterLarge
              }`}
            />
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
