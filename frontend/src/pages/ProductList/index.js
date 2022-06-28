import styles from "./ProductList.module.scss";
import classnames from "classnames/bind";
import UserSidebar from "src/components/UserSidebar";
import ProductItem from "./ProductItem";
import SortOption from "./SortOption";
import { ArrowIcon } from "src/components/Icons";

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
                <ArrowIcon className={cx("arrow-left")}/>
                <span className={cx("page-number")}>1/100</span>
                <ArrowIcon className={cx("arrow-right")}/>
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
