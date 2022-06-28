import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function SizeList() {
  return (
    <div className={cx("size-item-wrapper")}>
      <label>
        <input className={cx("size-item-checkbox")} type="checkbox"/>
        <div className={cx("size-item")}>S</div>
      </label>
      <label>
        <input className={cx("size-item-checkbox")} type="checkbox"/>
        <div className={cx("size-item")}>M</div>
      </label>
      <label>
        <input className={cx("size-item-checkbox")} type="checkbox"/>
        <div className={cx("size-item")}>L</div>
      </label>
    </div>
  );
}

export default SizeList;
