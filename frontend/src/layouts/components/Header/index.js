import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import searchSvg from 'src/assets/images/search.svg';
import logoSvg from 'src/assets/images/logo.svg';
import { Register, Login, ForgotPassword } from "src/components/Modal";

const cx = classnames.bind(styles);

function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("top")}>
        <div className={cx("container")}>
            <div className={cx("search")}>
                <input className={cx('search-input')} placeholder="Search"/>
                <img src={searchSvg} className={cx('search-icon')}/>
            </div>
            <img src={logoSvg} className={cx("logo")}/>
            <div className={cx("info")}></div>
        </div>
      </div>
      <nav className={cx("nav")}></nav>
    </header>
  );
}

export default Header;
