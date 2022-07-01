import styles from "./UserHeader.module.scss";
import classnames from "classnames/bind";
import NavItemUserHeader from "./NavItemUserHeader";
import { productConstants } from "src/app/constants";
const cx = classnames.bind(styles);

function NavUserHeader() {
  return (
    <nav className={cx("nav")}>
      <div className={cx("nav-list")}>
          {Object.keys(productConstants).map((constantsKey, index)=>{
            return <NavItemUserHeader key={index} title={constantsKey}/>
          })}
        </div>
    </nav>
  );
}

export default NavUserHeader;
