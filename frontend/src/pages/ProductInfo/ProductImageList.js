import styles from "./ProductInfo.module.scss";
import classnames from "classnames/bind";
import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";
import { Link } from "react-router-dom";
const cx = classnames.bind(styles);

function ProductImageList({ photos, ids }) {
  if (photos.length > 4) photos = photos.slice(0, 3);
  if (ids?.length > 4) ids = ids.slice(0, 3);
  const cld = new Cloudinary({
    cloud: {
      cloudName: process.env.REACT_APP_CLOUD_NAME_CLOUDINARY,
    },
  });
  return (
    <div className={cx("product-img-list")}>
      {photos.map((photo, index) => {
        if (!ids)
          return (
            <div key={index} className={cx("product-img-item-wrapper")}>
              <AdvancedImage
                cldImg={cld.image(photo)}
                className={cx("product-img-item")}
              />
            </div>
          );
        else
          return (
            <Link key={index} to={`/productinfo/${ids[index]}`}>
              <div className={cx("product-img-item-wrapper")}>
                <AdvancedImage
                  cldImg={cld.image(photo)}
                  className={cx("product-img-item")}
                />
              </div>
            </Link>
          );
      })}
    </div>
  );
}

export default ProductImageList;
