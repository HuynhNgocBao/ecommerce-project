import styles from "./ProductInfo.module.scss";
import classnames from "classnames/bind";
import MenImg from "src/assets/images/men.jpg";
import { StarIcon } from "src/components/Icons";
import SizeList from "src/components/UserSidebar/SizeList";
import ColorList from "src/components/UserSidebar/ColorList";
import Button from "src/components/Button";
const cx = classnames.bind(styles);

function ProductInfo() {
  return (
    <div className={cx("wrapper")}>
      <span className={cx("path")}>Ladies / Dresses</span>
      <div className={cx("container")}>
        <div className={cx("product-img-list-left")}>
          <img src={MenImg} alt="Product" className={cx("product-img-item-left")} />
          <img src={MenImg} alt="Product" className={cx("product-img-item-left")} />
          <img src={MenImg} alt="Product" className={cx("product-img-item-left")} />
          <img src={MenImg} alt="Product" className={cx("product-img-item-left")} />
        </div>
        <img src={MenImg} alt="Product" className={cx("product-img-main")} />
        <div className={cx("product-info")}>
          <span className={cx("product-name")}>
            Collete Stretch Linen Minidress
          </span>
          <span className={cx("product-price")}>$69.00</span>
          <div className={cx("product-review")}>
              <div className={cx("product-star")}>
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <span className={cx("product-number-review")}>0 review</span>
          </div>
          <div className={cx("filter-title")}>Size</div>
          <SizeList />
          <div className={cx("filter-title")}>Color</div>
          <ColorList />
          <div className={cx("quantity-wrapper")}>
              <div className={cx("quantity-title")}>Quantity</div>
              <div className={cx("quantity-choice")}>
                <div className={cx("decrease")}>-</div>
                <div className={cx("quantity")}>3</div>
                <div className={cx("increase")}>+</div>
              </div>
          </div>
          <Button third className={cx("add-to-cart")}>
            Add to cart
          </Button>
          <div className={cx("product-result")}>
            <h3 className={cx("product-result-title")}>
              Model wearing size S
            </h3>
            <p className={cx("product-result-info")}>- Chest: 36”</p>
            <p className={cx("product-result-info")}>- Length: 25.75”</p>
          </div>
        </div>
        <div className={cx("product-img-list-right")}>
            <div className={cx("more-title")}>
                <h4>More from</h4>
                <p>Zara</p>
            </div>
          <img src={MenImg} alt="Product" className={cx("product-img-item-right")} />
          <img src={MenImg} alt="Product" className={cx("product-img-item-right")} />
          <img src={MenImg} alt="Product" className={cx("product-img-item-right")} />
          <img src={MenImg} alt="Product" className={cx("product-img-item-right")} />
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
