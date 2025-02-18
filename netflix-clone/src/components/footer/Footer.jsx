import styles from "./footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
function Footer() {
  return (
    <div className={styles.footer_outer_container}>
      <div className={styles.footer_left}>
        <ul>
          <li>
            <a href="">
              <FacebookOutlinedIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </a>
          </li>
          <li>
            <a href="">Audio Description</a>
          </li>
          <li>
            <a href="">Investor Relations</a>
          </li>
          <li>
            <a href="">Legal Notices</a>
          </li>
          <li>
            <a href="">Service code</a>
          </li>
          <li>
            <a href=""> ©1997-2024 Netflix,inc</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="">Help Center</a>
          </li>
          <li>
            <a href="">Jobs</a>
          </li>
          <li>
            <a href="">Cookie Preferences</a>
          </li>
          <li className={styles.footer_mobile_page}>
            <a href="">Privacy</a>
          </li>
          <li className={styles.footer_mobile_page}>
            <a href="">Media Center</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <a href="">Gift Cards</a>
          </li>
          <li>
            <a href="">Terms of Use</a>
          </li>
          <li>
            <a href="">Corporate Information</a>
          </li>
          <li className={styles.footer_mobile_page}>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className={styles.footer_right_container}>
        <ul>
          <li>
            <a href="">Media Center</a>
          </li>
          <li>
            <a href="">Privacy</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
