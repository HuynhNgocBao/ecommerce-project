import styles from "./ProductInfo.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
const cx = classnames.bind(styles);

function Quantity({quantityMax}) {
    const [quantity, setQuantity] = useState(0);
  return (
    
      <div className={cx("quantity-choice")}>
        <div
          className={cx("decrease", "quantity-icon", {
            disabled: quantity === 0,
          })}
          onClick={(e) => {
            if (quantity > 0) setQuantity((prev) => prev - 1);
          }}
        >
          <i className={cx("icon-minus")} />
        </div>
        <div className={cx("quantity")}>{quantity}</div>
        <div
          className={cx("increase", "quantity-icon", {
            disabled: quantity === quantityMax,
          })}
          onClick={(e) => {
            if (quantity < quantityMax) setQuantity((prev) => prev + 1);
          }}
        >
          <i className={cx("icon-plus")} />
        </div>
      </div>
  );
}

export default Quantity;
