import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import { useState, useEffect } from "react";
const cx = classnames.bind(styles);

function ColorList({ values = [], setFilterList }) {
  const [colorList, setColorList] = useState([]);
  useEffect(() => {
    if (setFilterList) setFilterList((prev) => {
      return { ...prev, colorFilter: colorList };
    });
  }, [colorList]);
  return (
    <div className={cx("color-item-wrapper")}>
      {values.map((value, index) => {
        return (
          <label key={index}>
            <input
              type="checkbox"
              className={cx("color-item-checkbox")}
              onChange={(e) => {
                if (e.target.checked) {
                  setColorList((prev) => [...prev, value]);
                } else setColorList((prev) => prev.filter((a) => a !== value));
              }}
            />
            <div
              className={cx("color-item")}
              style={{ backgroundColor: `${value}` }}
            ></div>
          </label>
        );
      })}
    </div>
  );
}

export default ColorList;
