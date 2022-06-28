import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function ColorList() {
  return (
    <div className={cx("color-item-wrapper")}>
      <label>
        <input type="checkbox" className={cx("color-item-checkbox")}/> 
        <div className={cx("color-item")} style={{backgroundColor: "#ff576d"}}></div>
      </label>
      <label>
        <input type="checkbox" className={cx("color-item-checkbox")}/> 
        <div className={cx("color-item")} style={{backgroundColor: "rgba(255, 213, 67)"}}></div>
      </label>
      <label>
        <input type="checkbox" className={cx("color-item-checkbox")}/> 
        <div className={cx("color-item")} style={{backgroundColor: "rgba(95, 109, 255)"}}></div>
      </label>
      <label>
        <input type="checkbox" className={cx("color-item-checkbox")}/> 
        <div className={cx("color-item")} style={{backgroundColor: "rgba(255, 161, 95)"}}></div>
      </label>
      <label>
        <input type="checkbox" className={cx("color-item-checkbox")}/> 
        <div className={cx("color-item")} style={{backgroundColor: "rgba(61, 61 , 63)"}}></div>
      </label>
    </div>
  );
}

export default ColorList;
