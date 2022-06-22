import styles from "./Footer.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import logoSvg from "src/assets/images/logo.svg";
import NavbarFooter from "./NavBarFooter";
import facebookIcon from "src/assets/images/facebook-icon.svg";
import instagramIcon from "src/assets/images/instagram-icon.svg";
import twitterIcon from "src/assets/images/twitter-icon.svg";

const cx = classnames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("top")}>
        <div className={cx("container")}>
          <img src={logoSvg} alt="logo" className={cx("logo")} />
          <NavbarFooter />
          <div className={cx("media")}>
            <img
              className={cx("media-icon")}
              src={twitterIcon}
              alt="twitter icon"
            />
            <img
              className={cx("media-icon")}
              src={facebookIcon}
              alt="facebook icon"
            />
            <img
              className={cx("media-icon")}
              src={instagramIcon}
              alt="instagram icon"
            />
          </div>
        </div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("container")}>
          <NavbarFooter />
          <div className={cx("policy")}>
            <Link to="/" className={cx("policy-item")}>
              Privacy Policy
            </Link>
            <Link to="/" className={cx("policy-item")}>
            Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
