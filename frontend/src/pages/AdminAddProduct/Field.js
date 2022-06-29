import styles from "./AdminAddProduct.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function Field({title, children}) {
  return (
    <div className={cx("field")}>
      <div className={cx("field-title")}>{title}</div>
      <div className={cx("input-wrapper")}>
        {children}
      </div>
    </div>
  );
}

export default Field;
