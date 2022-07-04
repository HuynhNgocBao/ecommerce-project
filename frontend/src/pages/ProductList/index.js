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
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(20);
  const [total, setTotal] = useState(0);
  const [productList, setProductList] = useState([]);
  const [filterList, setFilterList] = useState({
    page,
    genderFilter: searchParams.get("genderFilter"),
    typeFilter: searchParams.get("typeFilter"),
    categoryFilter: null,
    sizeFilter: null,
    colorFilter: null,
    brandFilter: null,
    priceFilter: {
      left: 0,
      right: 300,
    },
    availableFilter:[],
    sortFilter: {
      field: null,
      isInc: 1,
    },
  });
  useEffect(() => {
    axios
      .post("/api/product/", filterList)
      .then((response) => {
        setPerPage((prev) => response.data.perPage);
        setTotal((prev) => response.data.total);
        setProductList((prev) => response.data.products);
      })
      .catch((err) => console.log(err));
  }, [filterList]);

  useEffect(() => {
    setFilterList((prev) => {
      return {
        ...prev,
        page,
        genderFilter: searchParams.get("genderFilter"),
        typeFilter: searchParams.get("typeFilter"),
      };
    });
  }, [searchParams.get("genderFilter"), searchParams.get("typeFilter"), page]);

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container", "grid", "wide")}>
        {filterList.genderFilter && <span className={cx("path")}>
          {filterList.genderFilter} / {filterList.typeFilter}
        </span>}
        <div className={cx("row")}>
          <UserSidebar setFilterList={setFilterList} filterList={filterList} />
          <div className={cx("product", "col-10")}>
            <div className={cx("page-wrapper")}>
              <SortOption setFilterList={setFilterList} />
              {productList.length > 0 && (
                <div className={cx("page")}>
                  <i
                    className={cx("arrow-left", "icon-arrow")}
                    onClick={(e) => {
                      if (page > 1) setPage((prev) => prev - 1);
                    }}
                  />
                  <span className={cx("page-number")}>
                    {page}/{Math.ceil(total / perPage)}
                  </span>
                  <i
                    className={cx("arrow-right", "icon-arrow")}
                    onClick={(e) => {
                      if (page < Math.ceil(total / perPage))
                        setPage((prev) => prev + 1);
                    }}
                  />
                </div>
              )}
            </div>
            <div className={cx("product-list", "row")}>
              {productList.length === 0 && <div className={cx("no-result")}>No results found</div>}
              {productList &&
                productList.map((product, index) => {
                  return (
                    <ProductItem product={product} key={index}></ProductItem>
                  );
                })}
            </div>
            {productList.length > 0 && (
              <div className={cx("page")}>
                <i
                  className={cx("arrow-left", "icon-arrow")}
                  onClick={(e) => {
                    if (page > 1) setPage((prev) => prev - 1);
                  }}
                />
                <span className={cx("page-number")}>
                  {page}/{Math.ceil(total / perPage)}
                </span>
                <i
                  className={cx("arrow-right", "icon-arrow")}
                  onClick={(e) => {
                    if (page < Math.ceil(total / perPage))
                      setPage((prev) => prev + 1);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
