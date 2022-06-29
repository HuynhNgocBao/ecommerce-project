import styles from "./ProductList.module.scss";
import classnames from "classnames/bind";
import UserSidebar from "src/components/UserSidebar";
import ProductItem from "./ProductItem";
import SortOption from "./SortOption";

const cx = classnames.bind(styles);

function ProductList() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "grid", "wide")}>
      <span className={cx("path")}>Ladies / Dresses</span>
        <div className={cx("row")}>
          <UserSidebar />
          <div className={cx("product","col-10")}>
            <SortOption/>
            <div className={cx("page")}>
                <i className={cx("arrow-left", "icon-arrow")}/>
                <span className={cx("page-number")}>1/100</span>
                <i className={cx("arrow-right", "icon-arrow")}/>
            </div>
            <div className={cx("product-list", "row")}>
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
              <ProductItem />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
