import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import { useState, useEffect } from "react";
const cx = classnames.bind(styles);

function BrandList({ values = [], setFilterList }) {
  const [brandList, setBrandList] = useState([]);
  useEffect(() => {
    setFilterList((prev) => {
      return { ...prev, brandFilter: brandList };
    });
  }, [brandList]);
  return (
    <>
      {values.map((value, index) => {
        return (
          <label key={index} className={cx("brand-item")}>
            <div className={cx("brand-item-container")}>
              <span className={cx("brand-item-title")}>{value}</span>
              <input
                type="checkbox"
                className={cx("brand-item-checkbox")}
                onChange={(e) => {
                  if (e.target.checked) {
                    setBrandList((prev) => [...prev, value]);
                  } else
                    setBrandList((prev) => prev.filter((a) => a !== value));
                }}
              />
            </div>
          </label>
        );
      })}
    </>
  );
}

export default BrandList;
