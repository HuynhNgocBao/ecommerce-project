import styles from "./AdminAddProduct.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
import { forwardRef } from "react";

const cx = classnames.bind(styles);

const NoImg = forwardRef(({handleChange},ref) => {
  const [imgSrc, setImgSrc] = useState("");
  return (
    <label className={cx("no-img")}>
      <div className={cx("no-img-container")}>
        {imgSrc && <img src={imgSrc} alt="a" className={cx("img-preview")} />}
        {!imgSrc && <i className={cx("icon-plus", "add")} />}
        {!imgSrc && <div className={cx("no-img-title")}>Add photo</div>}
        <input
          ref={ref}
          className={cx("no-img-input")}
          type="file"
          accept="image/png, image/gif, image/jpeg"
          onChange={(e) => {
            setImgSrc(URL.createObjectURL(e.target.files[0]));
            handleChange(e);
          }}
        />
      </div>
    </label>
  );
});

export default NoImg;
