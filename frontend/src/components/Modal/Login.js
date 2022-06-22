import styles from "./Modal.module.scss";
import classnames from "classnames/bind";
import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import crossSvg from "src/assets/images/cross.svg";
import { getUser } from "src/features/auth/authSlice";
import { showModal, closeModal } from "src/features/modal/modalSlice";
import { setError, clearError } from "src/features/auth/authSlice";
const cx = classnames.bind(styles);

function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const errormsg = useSelector((state) => state.auth.error);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/auth/login", formData)
      .then(() => {
        dispatch(clearError());
        dispatch(getUser());
        dispatch(closeModal());
      })
      .catch((err) => {
        dispatch(setError(err.response.data));
      });
  };

  const handleCloseModal = (e) => {
    dispatch(closeModal());
    dispatch(clearError());
  };

  return (
    <div className={cx("wrapper")} onClick={handleCloseModal}>
      <form
        className={cx("container")}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          src={crossSvg}
          className={cx("close")}
          onClick={handleCloseModal}
          alt="close"
        />
        <div className={cx("header")}>
          <span className={cx("title")}>Login</span>
          <span className={cx("error", "error-header")}>{errormsg}</span>
        </div>
        <div className={cx("form-group")}>
          <label className={cx("label")}>EMAIL</label>
          <input
            name="email"
            className={cx("input")}
            placeholder="Enter your email..."
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={cx("form-group")}>
          <label className={cx("label")}>PASSWORD</label>
          <input
            name="password"
            className={cx("input")}
            placeholder="Enter your password..."
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className={cx("choice")}>
          <div className={cx("remember-password")}>
            <input type="checkbox" className={cx("check-box")} />
            <span>Remember password</span>
          </div>
          <span
            className={cx("forgot-password")}
            onClick={() => dispatch(showModal("forgotpassword"))}
          >
            Forgot your password?
          </span>
        </div>
        <button className={cx("submit")} onClick={handleSubmit}>
          Log in
        </button>
        <div className={cx("footer")}>
          Don't you have an account?
          <span
            className={cx("link")}
            onClick={() => {
              dispatch(showModal("register"));
              dispatch(clearError());
            }}
          >
            Register
          </span>
        </div>
      </form>
    </div>
  );
}

export default Login;
