import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import { useState, useEffect  } from "react";
import { set } from "react-hook-form";
const cx = classnames.bind(styles);

function AvailableList({ values, setFilterList }) {
  const [availableList, setAvailableList] = useState([]);
  useEffect(() => {
    setFilterList((prev) => {
      return { ...prev, availableFilter: availableList };
    });
  }, [availableList]);
  return (
    <>
      {values.map((value, index) => {
        return (
          <label key={index} className={cx("available-item")}>
            <div className={cx("available-item-container")}>
              <span className={cx("available-item-title")}>{value}</span>
              <input
                type="checkbox"
                className={cx("available-item-checkbox")}
                onChange={(e)=>{
                  if (e.target.checked) setAvailableList(prev=>[...prev, index]);
                  else setAvailableList(prev=>prev.filter(a=>a!==index));
                }}
              />
            </div>
          </label>
        );
      })}
    </>
  );
}

export default AvailableList;
