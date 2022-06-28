import styles from "./ProductList.module.scss";
import classnames from "classnames/bind";
import MenImg from "src/assets/images/men.jpg";
import { Link } from "react-router-dom";
import Button from "src/components/Button";

const cx = classnames.bind(styles);

function ProductItem() {
  return (
    <Link to="/productinfo" className={cx("product-item", "col", "col-2-4")}>
      <div className={cx("product-item-img")}>
        <span className={cx("sold-out")}>Sold out</span>
        <Button primary className={cx("quick-shop")}>+ Quick shop</Button>
        <img src={MenImg} alt="Men" />
      </div>
      <span className={cx("product-item-name")}>
        Collete Stretch Linen Minidress
      </span>
      <span className={cx("product-item-price")}>
        Collete Stretch Linen Minidress
      </span>
    </Link>
  );
}

export default ProductItem;
