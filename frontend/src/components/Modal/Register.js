import styles from "./Modal.module.scss";
import classnames from "classnames/bind";
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import crossSvg from 'src/assets/images/cross.svg'
const cx = classnames.bind(styles);

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  })
  const handleChange = (e)=>{
    setFormData(prevState=>{
      return {...prevState, [e.target.name]: e.target.value};
    });
  }
  const handleSubmit = (e)=>{
    e.preventDefault();
    axios.post('/api/auth/register', formData);
  }
  return (
    <div className={cx("wrapper")}>
      <form className={cx("container")}>
        <img src={crossSvg} className={cx('close')} alt="close"/>
        <span className={cx("title")}>Register</span>
        <div className={cx("form-group")}>
          <label className={cx("label")}>NAME</label>
          <input
            name = "name"
            className={cx("input")}
            placeholder="Enter your name..."
            type="text"
            value = {formData.name}
            onChange={handleChange}
          />
          <span className={cx("error")}>Please enter a valid name</span>
        </div>
        <div className={cx("form-group")}>
          <label className={cx("label")}>EMAIL</label>
          <input
            name="email"
            className={cx("input")}
            placeholder="Enter your email..."
            type="email"
            value = {formData.email}
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
        <span className={cx("policy")}>
          By creating an account you agree to the <Link className={cx('link')}to='/'>Terms of Service</Link> and <Link className={cx('link')}to='/'>Privacy Policy</Link>
        </span>
        <button className={cx('submit')} onClick={handleSubmit}>Register</button>
        <div className={cx('footer')}>
          Do you have an account? <Link className={cx('link')}to='/'>Log in</Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
