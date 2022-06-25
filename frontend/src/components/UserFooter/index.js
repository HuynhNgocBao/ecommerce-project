import styles from "./UserFooter.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LogoIcon,
} from "src/components/Icons";
import NavbarUserFooter from "./NavBarUserFooter";

const cx = classnames.bind(styles);

function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className={cx("top")}>
        <div className={cx("container")}>
          <LogoIcon alt="logo" className={cx("logo")} />
          <NavbarUserFooter />
          <div className={cx("media")}>
            <TwitterIcon className={cx("media-icon")} />
            <FacebookIcon className={cx("media-icon")} />
            <InstagramIcon className={cx("media-icon")} />
          </div>
        </div>
      </div>
      <div className={cx("bottom")}>
        <div className={cx("container")}>
          <NavbarUserFooter />
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
