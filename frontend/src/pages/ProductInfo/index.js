import styles from "./ProductInfo.module.scss";
import classnames from "classnames/bind";
import SizeList from "src/components/UserSidebar/SizeList";
import ColorList from "src/components/UserSidebar/ColorList";
import Button from "src/components/Button";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductImageList from "./ProductImageList";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import Quantity from "./Quantity";
const cx = classnames.bind(styles);

function ProductInfo() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME_CLOUDINARY,
    },
  });
  const [moreProducts, setMoreProducts] = useState([]);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    axios
      .post("/api/product/getproductinfo", { id })
      .then((response) => {
        setProduct((prev) => response.data);
        return response.data;
      })
      .then((data) => {
        axios
          .post("/api/product/getmoreproductswithfield", {
            field: "brand",
            value: data.brand,
          })
          .then((response) => setMoreProducts((prev) => response.data));
      });
  }, [id]);
  useEffect(() => {}, []);
  if (!product) return <></>;
  return (
    <div className={cx("wrapper")}>
      <div className={cx("path")}>
        {product.gender}/{product.type}
      </div>
      <div className={cx("container")}>
        <ProductImageList photos={product.photos}></ProductImageList>
        <AdvancedImage
          cldImg={cld.image(product.photos[0])}
          alt="Product"
          className={cx("product-img-main")}
        />
        <div className={cx("product-info")}>
          <span className={cx("product-name")}>{product.name}</span>
          <span className={cx("product-price")}>${product.price}</span>
          <div className={cx("product-review")}>
            <div className={cx("product-star")}>
              <i className={cx("icon-star")} />
              <i className={cx("icon-star")} />
              <i className={cx("icon-star")} />
              <i className={cx("icon-star")} />
              <i className={cx("icon-star")} />
            </div>
            <span className={cx("product-number-review")}>0 review</span>
          </div>
          <div className={cx("filter-title")}>Size</div>
          <SizeList values={product.size} />
          <div className={cx("filter-title")}>Color</div>
          <ColorList values={product.colors} />
          <div className={cx("quantity-wrapper")}>
            <div className={cx("quantity-title")}>Quantity</div>
            <Quantity quantityMax={product.quantity} />
          </div>
          <Button third className={cx("add-to-cart")}>
            Add to cart
          </Button>
          <div className={cx("product-result")}>
            <div className={cx("product-result-info")}>
              {product.description}
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "auto" }}>
          <div className={cx("more-title")}>
            <h4>More from</h4>
            <p>{product.brand}</p>
          </div>
          <ProductImageList
            photos={moreProducts.map((product, index) => {
              return product.photos[0];
            })}
            ids={moreProducts.map((product, index) => {
              return product._id;
            })}
          ></ProductImageList>
        </div>
      </div>
    </div>
  );
}

export default ProductInfo;
