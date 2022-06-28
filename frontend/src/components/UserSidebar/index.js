import styles from "./Sidebar.module.scss";
import classnames from "classnames/bind";
import FilterItem from "./FilterItem";
import BrandItem from "./BrandItem";
import AvailableItem from "./AvailableItem";
import PriceItem from "./PriceItem";
import SizeList from "./SizeList";
import ColorList from "./ColorList";
const cx = classnames.bind(styles);

function UserSidebar() {
  return (
    <aside className={cx("wrapper","col","col-2")}>
      <div className={cx("container")}>
        <div className={cx("category")}>
          <span className={cx("category-title")}>Category</span>
          <ul className={cx("category-list")}>
            <li className={cx("category-item")}>All dresses</li>
            <li className={cx("category-item")}>Rompers / Jumpsuits</li>
            <li className={cx("category-item")}>Casual dresses</li>
            <li className={cx("category-item")}>Going out dresses</li>
            <li className={cx("category-item")}>Party / Ocassion dresses</li>
            <li className={cx("category-item")}>Mini dresses</li>
            <li className={cx("category-item")}>Maxi / Midi dresses</li>
            <li className={cx("category-item")}>Sets</li>
          </ul>
        </div>
        <div className={cx("filter")}>
          <span className={cx("filter-title")}>Filter</span>
          <ul className={cx("filter-list")}>
            <FilterItem name="Size">
              <SizeList/>
            </FilterItem>
            <FilterItem name="Color">
              <ColorList/>
            </FilterItem>
            <FilterItem name="Brand">
              <BrandItem brandName="Zara" />
              <BrandItem brandName="H&M" />
              <BrandItem brandName="Pull&Bear" />
              <BrandItem brandName="Dior" />
              <BrandItem brandName="Chanel" />
            </FilterItem>
            <FilterItem name="Price">
              <PriceItem min={0} max={100}/>
            </FilterItem>
            <FilterItem name="Available">
              <AvailableItem availableName="In store" />
              <AvailableItem availableName="Out of stock" />
            </FilterItem>
          </ul>
        </div>
      </div >
    </aside>
  );
}

export default UserSidebar;
