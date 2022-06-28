import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function BrandItem({ brandName }) {
  return (
    <li className={cx("brand-item")}>
      <div className={cx("brand-item-container")}>
        <span className={cx("brand-item-title")}>{brandName}</span>
        <input type="checkbox" className={cx("brand-item-checkbox")} />
      </div>
    </li>
  );
}

export default BrandItem;
