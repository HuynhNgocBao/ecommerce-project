import styles from "./CreateNewPassword.module.scss";
import classnames from "classnames/bind";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

function CreateNewPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const search = location.search;
  const token = new URLSearchParams(search).get("token");
  const errormsg = useSelector((state) => state.auth.error);
  const [formData, setFormData] = useState({
    newpassword: "",
  });

  const handleChange = (e) => {
    setFormData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  useEffect(() => {
    axios.post("/api/auth/checktoken", { token }).catch((error) => {
      navigate("/");
    });
  }, [token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/auth/createnewpassword', {token, ...formData});
  };

  return (
    <div className={cx("wrapper")}>
      <form
        className={cx("container")}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={cx("header")}>
          <span className={cx("title")}>Create new password</span>
          <span className={cx("error", "error-header")}>{errormsg}</span>
        </div>
        <div className={cx("form-group")}>
          <label className={cx("label")}>NEW PASSWORD</label>
          <input
            name="newpassword"
            className={cx("input")}
            placeholder="Enter your new password..."
            type="password"
            value={formData.newpassword}
            onChange={handleChange}
          />
        </div>
        <button className={cx("submit")} onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateNewPassword;
