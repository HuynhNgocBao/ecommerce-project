import styles from "./AdminAddProduct.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";

const cx = classnames.bind(styles);

const PhotoInput = ({ handleChange = (e)=>{}}) => {
  const [imgSrc, setImgSrc] = useState("");
  return (
    <label className={cx("photo-input")}>
      <div className={cx("photo-input-container")}>
        {imgSrc && (
          <i
            className={cx("icon-cross", "close")}
            onClick={(e) => {
              e.preventDefault();
              setImgSrc("");
            }}
          />
        )}
        {imgSrc && (
          <img
            src={imgSrc}
            alt="preview"
            className={cx("photo-input-preview")}
          />
        )}
        {!imgSrc && <i className={cx("icon-plus", "photo-input-add")} />}
        {!imgSrc && <div className={cx("photo-input-title")}>Add photo</div>}
        <input
          className={cx("photo-input-body")}
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
};

export default PhotoInput;
