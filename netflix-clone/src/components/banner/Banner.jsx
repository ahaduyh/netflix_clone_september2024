import { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/requests";
import styles from "./banner.module.css";
export default function Banner() {
  const [movie, SetMovie] = useState({});
  const [bannerPlay, setBannerPlay] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        console.log(request.data.results);
        SetMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        console.log("error", error);
      }
    })();
    setBannerPlay(false);
  }, [bannerPlay]);

  const changeBanner = () => {
    setBannerPlay(true);
  };
  const myList = () => {
    window, scrollTo(0, 500);
  };
  function trancate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <>
      <div
        className={styles.banner}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition: "auto",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className={styles.banner_content}>
          <h1 className="banner_title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <div className={styles.banner_buttons}>
            <button onClick={changeBanner}>Play</button>
            <button onClick={myList}>My List</button>
          </div>
          <div>
            <p className={`${styles.banner_description}   tajawal-light`}>
              {trancate(movie.overview, 150)}
            </p>
          </div>
        </div>
        <div className={styles.banner_fadeBottom} />
      </div>
    </>
  );
}
