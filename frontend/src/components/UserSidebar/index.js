import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import FilterItem from "./FilterItem";
import BrandItem from "./BrandItem";
import AvailableItem from "./AvailableItem";
import PriceItem from "./PriceItem";
import SizeList from "./SizeList";
import ColorList from "./ColorList";
import { productConstants } from "src/app/constants";
const cx = classnames.bind(styles);

function UserSidebar({ setFilterList, filterList }) {
  return (
    <aside className={cx("wrapper", "col", "col-2")}>
      <div className={cx("container")}>
        <div className={cx("category")}>
          <span className={cx("category-title")}>Category</span>
          <ul className={cx("category-list")}>
          <li className={cx("category-item")}>All {filterList.typeFilter}</li>
            {
              productConstants[filterList.genderFilter]?.[
                filterList.typeFilter
              ] &&
              productConstants[filterList.genderFilter][
                filterList.typeFilter
              ].map((categoryName, index) => {
                return <li key={index} className={cx("category-item")}>{categoryName}</li>;
              })}
          </ul>
        </div>
        <div className={cx("filter")}>
          <span className={cx("filter-title")}>Filter</span>
          <ul className={cx("filter-list")}>
            <FilterItem name="Size">
              <SizeList />
            </FilterItem>
            <FilterItem name="Color">
              <ColorList />
            </FilterItem>
            <FilterItem name="Brand">
              <BrandItem brandName="Zara" />
              <BrandItem brandName="H&M" />
              <BrandItem brandName="Pull&Bear" />
              <BrandItem brandName="Dior" />
              <BrandItem brandName="Chanel" />
            </FilterItem>
            <FilterItem name="Price">
              <PriceItem min={0} max={100} />
            </FilterItem>
            <FilterItem name="Available">
              <AvailableItem availableName="In store" />
              <AvailableItem availableName="Out of stock" />
            </FilterItem>
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default UserSidebar;
