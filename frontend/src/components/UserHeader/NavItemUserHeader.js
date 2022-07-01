import styles from "./UserHeader.module.scss";
import classnames from "classnames/bind";
import { productConstants } from "src/app/constants";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

function NavItemUserHeader({ title }) {
  return (
    <div className={cx("nav-item")}>
      <span className={cx("title")}>{title}</span>
      <i className={cx("arrow", "icon-arrow")} />
      <div className={cx("subnav")}>
        {Object.keys(productConstants[title]).map((constantsKey, index) => {
          return (
            <Link
              key = {index}
              to={`/productlist?genderFilter=${title}&typeFilter=${constantsKey}`}
              className={cx("subnav-item")}
            >
              {constantsKey}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default NavItemUserHeader;
