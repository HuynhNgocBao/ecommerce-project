import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
import arrowSvg from 'src/assets/images/arrow.svg';
const cx = classnames.bind(styles);

function NavBarHeader() {
  const [showSubnav, setShowSubnav] = useState(false);
  return (
    <nav className={cx("nav")}>
      <div className={cx("nav-list")}>
        <div className={cx("nav-item")}>
          <span className={cx("title")}>Men</span>
          <img
            className={cx("arrow-down")}
            src={arrowSvg}
            alt="arrow down"
            onClick={() => {
              setShowSubnav((prevState) => !prevState);
            }}
          />
        </div>
        <div className={cx("nav-item")}>
          <span className={cx("title")}>Ladies</span>
          <img
            className={cx("arrow-down")}
            src={arrowSvg}
            alt="arrow down"
            onClick={() => {
              setShowSubnav((prevState) => !prevState);
            }}
          />
        </div>
        <div className={cx("nav-item")}>
          <span className={cx("title")}>Girls</span>
          <img
            className={cx("arrow-down")}
            src={arrowSvg}
            alt="arrow down"
            onClick={() => {
              setShowSubnav((prevState) => !prevState);
            }}
          />
        </div>
        <div className={cx("nav-item")}>
          <span className={cx("title")}>Boys</span>
          <img
            className={cx("arrow-down")}
            src={arrowSvg}
            alt="arrow down"
            onClick={() => {
              setShowSubnav((prevState) => !prevState);
            }}
          />
        </div>
        {showSubnav && (
            <div className={cx("subnav")}>
              <span className={cx("subnav-item")}>Tops</span>
              <span className={cx("subnav-item")}>Bottoms</span>
              <span className={cx("subnav-item")}>Dresses</span>
              <span className={cx("subnav-item")}>Jackets</span>
              <span className={cx("subnav-item")}>Shoes</span>
              <span className={cx("subnav-item")}>Accessories</span>
              <span className={cx("subnav-item")}>Sale</span>
            </div>
          )}
      </div>
    </nav>
  );
}

export default NavBarHeader;
