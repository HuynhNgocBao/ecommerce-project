import styles from "./Modal.module.scss";
import classnames from "classnames/bind";
import axios from "axios";
import {useState} from 'react';
import { Link } from "react-router-dom";
import crossSvg from "src/assets/images/cross.svg";
const cx = classnames.bind(styles);

function ForgotPassword() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={cx("wrapper")}>
      <form className={cx("container")}>
        <img src={crossSvg} className={cx("close")} alt="close" />
        <div className={cx('header')}>
          <span className={cx("title")}>Forgot Password</span>
          <span className={cx("instruction")}>Enter your e-mail address below and we’ll get you back on track.</span>
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
        <button className={cx("submit")} onClick={handleSubmit}>Submit</button>
        <div className={cx("footer")}>
        I remember my password now.
          <Link className={cx("link")} to="/">
            Log in?
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
