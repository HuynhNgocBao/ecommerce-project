import styles from "./Modal.module.scss";
import classnames from "classnames/bind";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import crossSvg from "src/assets/images/cross.svg";
import {showModal, closeModal} from 'src/features/modal/modalSlice';
import { setError, clearError } from "src/features/auth/authSlice";
const cx = classnames.bind(styles);

function Register() {
  const errormsg = useSelector(state=>state.auth.error);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
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
    axios.post("/api/auth/register", formData)
    .then(()=>{
      dispatch(clearError());
      dispatch(closeModal());
    })
    .catch(err=>{
      dispatch(setError(err.response.data));
    });
  };

  const handleCloseModal = (e) => {
    dispatch(closeModal());
    dispatch(clearError());
  };

  return (
    <div className={cx("wrapper")} onClick={handleCloseModal}>
      <form className={cx("container")} onClick={(e)=>{
        e.stopPropagation();
      }}>
      <img src={crossSvg} className={cx("close")} onClick={handleCloseModal} alt="close" />
        <div className={cx("header")}>
          <span className={cx("title")}>Register</span>
          <span className={cx("error","error-header")}>{errormsg}</span>
        </div>
        <div className={cx("form-group")}>
          <label className={cx("label")}>NAME</label>
          <input
            name="name"
            className={cx("input")}
            placeholder="Enter your name..."
            type="text"
            value={formData.name}
            onChange={handleChange}
          />
          <span className={cx("error")}></span>
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
          <span className={cx("error")}></span>
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
          <span className={cx("error")}></span>
        </div>
        <span className={cx("policy")}>
          By creating an account you agree to the{" "}
          <Link className={cx("link")} to="/">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link className={cx("link")} to="/">
            Privacy Policy
          </Link>
        </span>
        <button className={cx("submit")} onClick={handleSubmit}>
          Register
        </button>
        <div className={cx("footer")}>
          Do you have an account?{" "}
          <span className={cx("link")} onClick={()=>{
            dispatch(showModal("login"));
            dispatch(clearError());
          }}>
            Log in
          </span>
        </div>
      </form>
    </div>
  );
}

export default Register;
