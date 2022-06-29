import styles from "./AdminAddProduct.module.scss";
import classnames from "classnames/bind";
import NoImg from "./NoImg";
import { useState } from "react";

const cx = classnames.bind(styles);

function AdminAddProduct() {
    const [photos , setPhotos] = useState([]);
  return (
    <div className={cx("wrapper")}>
      <form className={cx("container")}>
        <div className={cx("item")}>
          <div className={cx("title")}>PHOTOS</div>
          <div className={cx("input-wrapper")}>
            <NoImg handleChange={(e)=>console.log(e.target.files[0])}/>
            <NoImg/>
            <NoImg/>
            <NoImg/>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AdminAddProduct;
