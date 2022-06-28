import styles from "./UserHeader.module.scss";
import classnames from "classnames/bind";
import NavItemUserHeader from "./NavItemUserHeader";
const cx = classnames.bind(styles);

function NavUserHeader() {
  return (
    <nav className={cx("nav")}>
      <div className={cx("nav-list")}>
          <NavItemUserHeader title="Men"/>
          <NavItemUserHeader title="Ladies"/>
          <NavItemUserHeader title="Girls"/>
          <NavItemUserHeader title="Boys"/>
        </div>
    </nav>
  );
}

export default NavUserHeader;
