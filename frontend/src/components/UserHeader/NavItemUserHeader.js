import styles from "./UserHeader.module.scss";
import classnames from "classnames/bind";
import { Link } from "react-router-dom";

const cx = classnames.bind(styles);

function NavItemUserHeader({ title }) {
  return (
    <div className={cx("nav-item")}>
      <span className={cx("title")}>{title}</span>
      <i className={cx("arrow", "icon-arrow")} />
      <div className={cx("subnav")}>
        <Link
          to={`/productlist?genderTypeFilter=${title}&clothesType=Tops`}
          className={cx("subnav-item")}
        >
          Tops
        </Link>
        <Link
          to={`/productlist?genderTypeFilter=${title}&clothesType=Bottoms`}
          className={cx("subnav-item")}
        >
          Bottoms
        </Link>
        <Link
          to={`/productlist?genderTypeFilter=${title}&clothesType=Dresses`}
          className={cx("subnav-item")}
        >
          Dresses
        </Link>
        <Link
          to={`/productlist?genderTypeFilter=${title}&clothesType=Jackets`}
          className={cx("subnav-item")}
        >
          Jackets
        </Link>
        <Link
          to={`/productlist?genderTypeFilter=${title}&clothesType=Shoes`}
          className={cx("subnav-item")}
        >
          Shoes
        </Link>
        <Link
          to={`/productlist?genderTypeFilter=${title}&clothesType=Accessories`}
          className={cx("subnav-item")}
        >
          Accessories
        </Link>
        <Link
          to={`/productlist?genderTypeFilter=${title}&clothesType=Sale`}
          className={cx("subnav-item")}
        >
          Sale
        </Link>
      </div>
    </div>
  );
}

export default NavItemUserHeader;
