import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import { useEffect, useState } from "react";
const cx = classnames.bind(styles);

function SizeList({ values = [], setFilterList }) {
  const [size, setSize] = useState(null);
  useEffect(() => {
    if (setFilterList) setFilterList((prev) => {
      return { ...prev, sizeFilter: size };
    });
  }, [size]);
  return (
    <div className={cx("size-item-wrapper")}>
      {values.map((value, index) => {
        return (
          <label key={index}>
            <input
              className={cx("size-item-checkbox")}
              type="checkbox"
              checked={size===value}
              onChange={(e) => {
                if (e.target.checked) {
                  setSize((prev) => value);
                } else {
                  setSize((prev) => null);
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
