import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import NavItem from "./NavItem";
const cx = classnames.bind(styles);

function NavBarHeader() {
  return (
    <nav className={cx("nav")}>
      <div className={cx("nav-list")}>
          <NavItem title="Men"/>
          <NavItem title="Ladies"/>
          <NavItem title="Girls"/>
          <NavItem title="Boys"/>
        </div>
    </nav>
  );
}

export default NavBarHeader;
