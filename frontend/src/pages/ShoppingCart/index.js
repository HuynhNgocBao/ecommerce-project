import classnames from "classnames/bind";
import styles from "./ShoppingCart.module.scss";
import SizeList from "src/components/UserSidebar/SizeList";
import ColorList from "src/components/UserSidebar/ColorList";
import Quantity from "../ProductInfo/Quantity";
import MenImg from "src/assets/images/men.jpg";
import Button from "src/components/Button";
const cx = classnames.bind(styles);

function ShoppingCart() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "grid", "wide")}>
        <div className={cx("title")}>MY BAG</div>
        <div className={cx("row")}>
          <div className={cx("info", "col", "col-9")}>
            <div className={cx("info-row")}>
              <div className={cx("row")}>
                <div className={cx("info-title", "col", "col-4")}>Product</div>
                <div className={cx("info-title", "col", "col-2")}>Color</div>
                <div className={cx("info-title", "col", "col-2")}>Size</div>
                <div className={cx("info-title", "col", "col-2")}>Quantity</div>
                <div className={cx("info-title", "col", "col-2")}>Amount</div>
              </div>
            </div>
            <div className={cx("info-row")}>
              <div className={cx("row")}>
                <div
                  className={cx("info-product", "info-item", "col", "col-4")}
                >
                  <div className={cx("row")}>
                    <div className={cx("col", "col-4")}>
                      <img
                        className={cx("info-photo")}
                        src={MenImg}
                        alt="ahihi"
                      />
                    </div>
                    <div className={cx("col", "col-4", "info-name-wrapper")}>
                      <div className={cx("info-name")}>
                        Collete Stretch Linen Minidress
                      </div>
                      <div className={cx("info-action")}>
                        <Button className={cx("info-action-btn")}>
                          Change
                        </Button>
                        <Button className={cx("info-action-btn")}>
                          remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={cx("info-color", "info-item", "col", "col-2")}>
                  <ColorList values={["Brown"]} />
                </div>
                <div className={cx("info-size", "info-item", "col", "col-2")}>
                  <SizeList values={["S"]} />
                </div>
                <div
                  className={cx("info-quantity", "info-item", "col", "col-2")}
                >
                  <Quantity quantityMax={100} />
                </div>
                <div className={cx("info-amount", "info-item", "col", "col-2")}>
                  600
                </div>
              </div>
            </div>
            </div>
            <div className={cx("total", "col", "col-3")}>
                <div className={cx("total-title")}>Total</div>
                <div className={cx("total-body")}>
                    <div className={cx("total-item")}>
                        <div className={cx("total-item-name")}>Shipping & Handling:</div>
                        <div className={cx("total-item-price")}>Free</div>
                    </div>
                    <div className={cx("total-item")}>
                        <div className={cx("total-item-name")}>Shipping & Handling:</div>
                        <div className={cx("total-item-price")}>Free</div>
                    </div>
                    <div className={cx("total-item", "subtotal")}>
                        <div className={cx("total-item-name")}>Subtotal:</div>
                        <div className={cx("total-item-price")}>Free</div>
                    </div>
                </div>
                <Button fourth className={cx("submit-btn")}>Checkout</Button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default ShoppingCart;
