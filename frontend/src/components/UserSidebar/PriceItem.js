import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import { useState, useEffect } from "react";
const cx = classnames.bind(styles);

function PriceItem() {
  const [leftValue, setLeftValue] = useState(0);
  const [rightValue, setRightValue] = useState(100);
  return (
    <div className={cx("price-item-wrapper")}>
      <div className={cx("price-item-track")}></div>
      <div
        className={cx("price-item-range")}
        style={{ left: `${leftValue}%`, right: `${100 - rightValue}%` }}
      ></div>
      <div
        className={cx("price-item-thunk", "price-item-thunk-left")}
        style={{
          left: `${leftValue}%`,
          transform: `translateX(${-leftValue}%)`,
        }}
      ></div>
      <div
        className={cx("price-item-thunk", "price-item-thunk-right")}
        style={{
          right: `${100 - rightValue}%`,
          transform: `translateX(${100 - rightValue}%)`,
        }}
      ></div>
      <input
        type="range"
        className={cx("price-item-input")}
        value={leftValue}
        onChange={(e) => {
          if (e.target.value <= rightValue && e.target.value < 100) setLeftValue(Number(e.target.value));
        }}
      />
      <input
        type="range"
        className={cx("price-item-input")}
        value={rightValue}
        onChange={(e) => {
          if (e.target.value >= leftValue && e.target.value > 0) setRightValue(Number(e.target.value));
        }}
      />
      <div className={cx("price-item-value-wrapper")}>
        <span className={cx("price-item-value")}>${3 * leftValue}</span>
        <span className={cx("price-item-value")}>${3 * rightValue}</span>
      </div>
    </div>
  );
}

export default PriceItem;
