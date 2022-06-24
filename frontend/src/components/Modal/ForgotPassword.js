import styles from "./Modal.module.scss";
import classnames from "classnames/bind";
import axios from "axios";
import {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import crossSvg from "src/assets/images/cross.svg";
import {showModal, closeModal} from 'src/features/modal/modalSlice';
import { setError, clearError } from "src/features/auth/authSlice";
const cx = classnames.bind(styles);

function ForgotPassword() {
  const errormsg = useSelector(state=>state.auth.error);
  const dispatch = useDispatch();
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
    axios.post('/api/auth/forgotpassword', formData)
    .then(()=>{
      dispatch(clearError());
      dispatch(closeModal());
    })
    .catch(err=>{
      dispatch(setError(err.response.data));
    })
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
        <div className={cx('header')}>
          <span className={cx("title")}>Forgot Password</span>
          <span className={cx("instruction")}>Enter your e-mail address below and we’ll get you back on track.</span>
          <span className={cx("error","error-header")}>{errormsg}</span>
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
        <span className={cx("link")} onClick={()=>{
            dispatch(showModal("login"));
            dispatch(clearError());
          }}>
            Log in?
          </span>
        </div>
      </form>
    </div>
  );
}

export default ForgotPassword;
