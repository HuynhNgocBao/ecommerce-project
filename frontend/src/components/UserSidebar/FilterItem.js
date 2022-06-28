import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";
import { ArrowIcon } from "src/components/Icons";
const cx = classnames.bind(styles);

function FilterItem({ children, name}) {
  const [showSubfilter, setShowSubfilter] = useState(false);
  return (
    <li className={cx("filter-item")}>
      <div
        className={cx("filter-item-header")}
        onClick={(e) => {
          setShowSubfilter((prev) => !prev);
          e.currentTarget.classList.toggle(cx("up"));
        }}
      >
        <span className={cx("filter-name")}>{name}</span>
        <ArrowIcon className={cx("filter-item-icon")} />
      </div>
      {showSubfilter && <div className={cx("filter-body")}>{children}</div>}
    </li>
  );
}

export default FilterItem;
