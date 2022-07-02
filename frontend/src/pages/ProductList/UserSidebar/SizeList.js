import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import { useEffect, useState } from "react";
const cx = classnames.bind(styles);

function SizeList({ values = [], setFilterList }) {
  const [sizeList, setSizeList] = useState([]);
  useEffect(() => {
    if (setFilterList) setFilterList((prev) => {
      return { ...prev, sizeFilter: sizeList };
    });
  }, [sizeList]);
  return (
    <div className={cx("size-item-wrapper")}>
      {values.map((value, index) => {
        return (
          <label key={index}>
            <input
              className={cx("size-item-checkbox")}
              type="checkbox"
              onChange={(e) => {
                if (e.target.checked) {
                  setSizeList((prev) => [...prev, value]);
                } else {
                  setSizeList((prev) => prev.filter((a) => a !== value));
                }
              }}
            />
            <div className={cx("size-item")}>{value}</div>
          </label>
        );
      })}
    </div>
  );
}

export default SizeList;
