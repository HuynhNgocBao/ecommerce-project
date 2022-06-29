import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function AvailableItem({ availableName }) {
  return (
    <label className={cx("available-item")}>
      <div className={cx("available-item-container")}>
        <span className={cx("available-item-title")}>{availableName}</span>
        <input type="checkbox" className={cx("available-item-checkbox")} />
      </div>
    </label>
  );
}

export default AvailableItem;
