import styles from "./ProductList.module.scss";
import classnames from "classnames/bind";
import MenImg from "src/assets/images/men.jpg";
import { Link } from "react-router-dom";
import Button from "src/components/Button";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

const cx = classnames.bind(styles);

function ProductItem({ product }) {
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME_CLOUDINARY,
    },
  });

  const productPhoto = cld.image(product.photos[0]);

  return (
    <Link to="/productinfo" className={cx("product-item", "col", "col-2-4")}>
      <div className={cx("product-item-img")}>
        {product.quantity <= 0 && (
          <span className={cx("sold-out")}>Sold out</span>
        )}
        {/* <Button primary className={cx("quick-shop")}>+ Quick shop</Button> */}
        <AdvancedImage cldImg={productPhoto} />
      </div>
      <span className={cx("product-item-name")}>{product.name}</span>
      <span className={cx("product-item-price")}>{product.price}</span>
    </Link>
  );
}

export default ProductItem;
