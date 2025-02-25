import Row from "../row/Row";
import request from "../../../utils/requests";
import Styles from "./rowList.module.css";
function RowList() {
  console.log(request);
  return (
    <div className={Styles.rowList}>
      <Row
        fetchUrl={request.fetchNetflixOriginals}
        title="NetflixOriginals"
        isLargeRow={true}
      />
      <Row fetchUrl={request.fetchTrending} title="Trending" />
      <Row fetchUrl={request.fetchTvShows} title="TvShows" />
      <Row fetchUrl={request.fetchTopRated} title="TopRated" />
      <Row fetchUrl={request.fetchActionMovies} title="ActionMovies" />
      <Row fetchUrl={request.fetchComedyMovies} title="ComedyMovies" />
      <Row fetchUrl={request.fetchDocumentaries} title="Documentaries" />
      <Row fetchUrl={request.fetchHorrorMovies} title="HorrorMovies" />
      <Row fetchUrl={request.fetchRomanceMovies} title="RomanceMovies" />
    </div>
  );
}

export default RowList;
