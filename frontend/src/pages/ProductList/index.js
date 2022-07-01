import styles from "./ProductList.module.scss";
import classnames from "classnames/bind";
import UserSidebar from "src/components/UserSidebar";
import ProductItem from "./ProductItem";
import SortOption from "./SortOption";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const cx = classnames.bind(styles);

function ProductList() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const [productList, setProductList] = useState([]);
  const [filterList, setFilterList] = useState({
    genderFilter: searchParams.get("genderFilter"),
    typeFilter: searchParams.get("typeFilter"),
    categoryFilter: null,
    sizeFilter: null,
    colorFilter: null,
    brandFilter: null,
    priceFilter: null,
    availableFilter: null,
  });
  useEffect(() => {
    axios
      .post("/api/product/", filterList)
      .then((response) => setProductList((prev) => response.data))
      .catch((err) => console.log(err));
  }, [filterList]);

  useEffect(() => {
    setFilterList((prev) => {
      return {
        ...prev,
        genderFilter: searchParams.get("genderFilter"),
        typeFilter: searchParams.get("typeFilter"),
      };
    });
  }, [searchParams.get("genderFilter"), searchParams.get("typeFilter")]);

  console.log(productList);
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "grid", "wide")}>
        <span className={cx("path")}>
          {filterList.genderFilter} / {filterList.typeFilter}
        </span>
        <div className={cx("row")}>
          <UserSidebar setFilterList={setFilterList} filterList={filterList}/>
          <div className={cx("product", "col-10")}>
            <SortOption />
            <div className={cx("page")}>
              <i className={cx("arrow-left", "icon-arrow")} />
              <span className={cx("page-number")}>1/100</span>
              <i className={cx("arrow-right", "icon-arrow")} />
            </div>
            <div className={cx("product-list", "row")}>
              {productList && productList.map((product,index)=>{
                return <ProductItem product={product} key={index}></ProductItem>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
