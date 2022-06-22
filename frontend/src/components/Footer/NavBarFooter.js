import styles from "./Footer.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function NavBarFooter() {
  return (
    <div className={cx("nav")}>
      <span className={cx("nav-item")}>Tops</span>
      <span className={cx("nav-item")}>Bottoms</span>
      <span className={cx("nav-item")}>Dresses</span>
      <span className={cx("nav-item")}>Jackets</span>
      <span className={cx("nav-item")}>Shoes</span>
      <span className={cx("nav-item")}>Accessories</span>
      <span className={cx("nav-item")}>Sale</span>
    </div>
  );
}

export default NavBarFooter;
