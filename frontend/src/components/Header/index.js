import styles from "./Header.module.scss";
import classnames from "classnames/bind";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import searchSvg from "src/assets/images/search.svg";
import logoSvg from "src/assets/images/logo.svg";
import cartSvg from "src/assets/images/cart.svg";
import Modal from "src/components/Modal";
import { showModal } from "src/features/modal/modalSlice";
import { logoutUser } from "src/features/auth/authSlice";
import NavbarHeader from "./NavBarHeader";

const cx = classnames.bind(styles);

function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  return (
    <header className={cx("wrapper")}>
      <Modal />
      <div className={cx("top")}>
        <div className={cx("container")}>
          <div className={cx("search")}>
            <input className={cx("search-input")} placeholder="Search" />
            <img src={searchSvg} alt="search" className={cx("search-icon")} />
          </div>
          <img src={logoSvg} alt="logo" className={cx("logo")} />
          <div className={cx("info")}>
            {!user && (
              <button
                className={cx("btn", "register-btn")}
                onClick={() => dispatch(showModal("register"))}
              >
                Register
              </button>
            )}
            {!user && (
              <button
                className={cx("btn", "login-btn")}
                onClick={() => dispatch(showModal("login"))}
              >
                Log in
              </button>
            )}
            {user && <div className={cx("avatar-dropdown")}>
              <span className={cx("avatar")}>{user.name}</span>
              <ul className={cx("dropdown-list")}>
                <li className={cx("dropdown-item")}>Account setting</li>
                <li className={cx("dropdown-item")} onClick={() => dispatch(logoutUser())}>Logout</li>
              </ul>
              </div>}
            <img src={cartSvg} alt="cart" className={cx("cart")} />
          </div>
        </div>
      </div>
      <NavbarHeader />
    </header>
  );
}

export default Header;