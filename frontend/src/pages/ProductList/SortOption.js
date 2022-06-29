import styles from "./ProductList.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
const cx = classnames.bind(styles);

function SortOption() {
  const [arrowUp, setArrowUp] = useState(false);
  const [showSortList, setShowSortList] = useState(false);
  const [sortType, setSortType] = useState("Popularity");
  const handleClickSortItem = (e) => {
    setShowSortList((prev) => !prev);
    setSortType(e.target.innerText);
    setArrowUp(prev=>!prev);
  };
  return (
    <div className={cx("sort")}>
      <div
        className={cx("sort-header")}
        onClick={(e) => {
          setShowSortList((prev) => !prev);
          setArrowUp(prev=>!prev);
        }}
      >
        <span className={cx("sort-name")}>Sort By: </span>
        <span className={cx("sort-type")}>{sortType}</span>
        <i className={cx("sort-icon","icon-arrow",{"up":arrowUp})} />
      </div>
      {showSortList && (
        <ul className={cx("sort-list")}>
          <li className={cx("sort-item")} onClick={handleClickSortItem}>
            Popularity
          </li>
          <li className={cx("sort-item")} onClick={handleClickSortItem}>
            Name: A - Z
          </li>
          <li className={cx("sort-item")} onClick={handleClickSortItem}>
            Price: lowest to highest
          </li>
          <li className={cx("sort-item")} onClick={handleClickSortItem}>
            Price: highest to lowest
          </li>
        </ul>
      )}
    </div>
  );
}

export default SortOption;
