import styles from "./ProductInfo.module.scss";
import classnames from "classnames/bind";
import MenImg from "src/assets/images/men.jpg";
import SizeList from "src/components/UserSidebar/SizeList";
import ColorList from "src/components/UserSidebar/ColorList";
import Button from "src/components/Button";
import axios from "axios";
const cx = classnames.bind(styles);

function ProductInfo() {
  // const [img, setImg] = useState("");
  // useEffect(() => {
  //   if (img==="") return;
  //   const formData = new FormData();
  //   formData.append("file", img);
  //   formData.append('upload_preset', 'abcdef');
  //   formData.append('public_id', "a");
  //   axios.post("https://api.cloudinary.com/v1_1/dizrot0bq/image/upload", formData).catch(e=>console.log(e));
  // });
  return (
    <div className={cx("wrapper")}>
      <span className={cx("path")}>Ladies / Dresses</span>
      <div className={cx("container")}>
        <div className={cx("product-img-list-left")}>
          <img
            src={MenImg}
            alt="Product"
            className={cx("product-img-item-left")}
          />
          <img
            src={MenImg}
            alt="Product"
            className={cx("product-img-item-left")}
          />
          <img
            src={MenImg}
            alt="Product"
            className={cx("product-img-item-left")}
          />
          <img
            src={MenImg}
            alt="Product"
            className={cx("product-img-item-left")}
          />
        </div>
        <img src={MenImg} alt="Product" className={cx("product-img-main")} />
        <div className={cx("product-info")}>
          <span className={cx("product-name")}>
            Collete Stretch Linen Minidress
          </span>
          <span className={cx("product-price")}>$69.00</span>
          <div className={cx("product-review")}>
            <div className={cx("product-star")}>
              <i className={cx("icon-star")}/>
              <i className={cx("icon-star")}/>
              <i className={cx("icon-star")}/>
              <i className={cx("icon-star")}/>
              <i className={cx("icon-star")}/>
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
              <div className={cx("decrease")}>
                <i className={cx("icon-minus")}/>
              </div>
              <div className={cx("quantity")}>3</div>
              <div className={cx("increase")}>
                <i className={cx("icon-plus")}/>
              </div>
            </div>
          </div>
          <Button third className={cx("add-to-cart")}>
            Add to cart
          </Button>
          <div className={cx("product-result")}>
            <h3 className={cx("product-result-title")}>Model wearing size S</h3>
            <p className={cx("product-result-info")}>- Chest: 36”</p>
            <p className={cx("product-result-info")}>- Length: 25.75”</p>
          </div>
        </div>
        <div className={cx("product-img-list-right")}>
          <div className={cx("more-title")}>
            <h4>More from</h4>
            <p>Zara</p>
          </div>
          <img
            src={MenImg}
            alt="Product"
            className={cx("product-img-item-right")}
          />
          <img
            src={MenImg}
            alt="Product"
            className={cx("product-img-item-right")}
          />
          <img
            src={MenImg}
            alt="Product"
            className={cx("product-img-item-right")}
          />
          <img
            src={MenImg}
            alt="Product"
            className={cx("product-img-item-right")}
          />
        </div>
      </div>
      {/* <input
        type="file"
        name="file"
        onChange={(e) => setImg(e.target.files[0])}
      /> */}
    </div>
  );
}

export default ProductInfo;
