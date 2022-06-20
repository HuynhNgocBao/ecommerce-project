import styles from "./Modal.module.scss";
import classnames from "classnames/bind";
import {Link} from 'react-router-dom';
import crossSvg from 'src/assets/images/cross.svg'
const cx = classnames.bind(styles);

function Login() {
  return (
    <div className={cx("wrapper")}>
      <form className={cx("container")}>
        <img src={crossSvg} className={cx('close')} alt="close"/>
        <span className={cx("title")}>Login</span>
        <div className={cx("form-group")}>
          <label className={cx("label")}>EMAIL</label>
          <input
            className={cx("input")}
            placeholder="Enter your email..."
            type="email"
          />
          <span className={cx("error")}>Please enter a valid email</span>
        </div>
        <div className={cx("form-group")}>
          <label className={cx("label")}>PASSWORD</label>
          <input
            className={cx("input")}
            placeholder="Enter your password..."
            type="password"
          />
          <span className={cx("error")}>
            Your passwords must be more than 6 characters!
          </span>
        </div>
        <div className={cx("choice")}>
            <div className={cx('remember-password')}>
                <input type="checkbox" className={cx('check-box')}/> 
                <span>Remember password</span>
            </div>
            <span className={cx('forgot-password')}>Forgot your password?</span>
        </div>
        <button className={cx('submit')}>Log in</button>
        <div className={cx('footer')}>
          Don't you have an account? <Link className={cx('link')}to='/'>Register</Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
