import styles from "./header.module.css";
import netflxi_logo from "../../assets/netflix_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Header() {  
  return (
    <>
      <div className={styles.header_container_outer}>
        <div className={styles.header_container}>
          <div className={styles.header_left}>
            <ul>
              <li>
                <img src={netflxi_logo} alt="NETFLIX" />
              </li>
              <li>Netflix</li>
              <li>Home</li>
              <li>TvShows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>MyList</li>
              <li>Browse by Languages</li>
            </ul>
          </div>
          <div className={styles.header_right}>
            <ul>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
              <li>
                <ArrowDropDownIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
