import styles from "./Modal.module.scss";
import classnames from "classnames/bind";
import axios from "axios";
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import crossSvg from "src/assets/images/cross.svg";
import { getUser } from "src/features/auth/authSlice";
const cx = classnames.bind(styles);

function Login() {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);
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
    axios.post("/api/auth/login", formData)
    .then(()=>{
      dispatch(getUser());
      console.log(user);
    })
  };
  return (
    <div className={cx("wrapper")}>
      <form className={cx("container")}>
        <img src={crossSvg} className={cx("close")} alt="close" />
        <span className={cx("title")}>Login</span>
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
          <span className={cx("error")}>Please enter a valid email</span>
        </div>
        <div className={cx("form-group")}>
          <label className={cx("label")}>PASSWORD</label>
          <input
            name = "password"
            className={cx("input")}
            placeholder="Enter your password..."
            type="password"
            value = {formData.password}
            onChange={handleChange}
          />
          <span className={cx("error")}>
            Your passwords must be more than 6 characters!
          </span>
        </div>
        <div className={cx("choice")}>
          <div className={cx("remember-password")}>
            <input type="checkbox" className={cx("check-box")} />
            <span>Remember password</span>
          </div>
          <Link to="/" className={cx("forgot-password")}>
            Forgot your password?
          </Link>
        </div>
        <button className={cx("submit")} onClick={handleSubmit}>Log in</button>
        <div className={cx("footer")}>
          Don't you have an account?{" "}
          <Link className={cx("link")} to="/">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
