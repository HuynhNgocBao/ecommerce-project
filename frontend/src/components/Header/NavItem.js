import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import arrowSvg from "src/assets/images/arrow.svg";

const cx = classnames.bind(styles);

function NavItem({title}) {
    return (  
        <div className={cx("nav-item")}>
          <span className={cx("title")}>{title}</span>
          <img
            className={cx("arrow-down")}
            src={arrowSvg}
            alt="arrow down"
          />
          <div className={cx("subnav")}>
          <span className={cx("subnav-item")}>Tops</span>
          <span className={cx("subnav-item")}>Bottoms</span>
          <span className={cx("subnav-item")}>Dresses</span>
          <span className={cx("subnav-item")}>Jackets</span>
          <span className={cx("subnav-item")}>Shoes</span>
          <span className={cx("subnav-item")}>Accessories</span>
          <span className={cx("subnav-item")}>Sale</span>
        </div>
        </div>
    );
}

export default NavItem;