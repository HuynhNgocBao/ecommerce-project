import styles from "./UserHeader.module.scss";
import classnames from "classnames/bind";
import { ArrowIcon } from "src/components/Icons";

const cx = classnames.bind(styles);

function NavItemUserHeader({ title }) {
  return (
    <div className={cx("nav-item")}>
      <span className={cx("title")}>{title}</span>
      <ArrowIcon className={cx("arrow-down")} />
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

export default NavItemUserHeader;
