import styles from "./AdminAddProduct.module.scss";
import classnames from "classnames/bind";
import { useState } from "react";

const cx = classnames.bind(styles);

function InputDropDown({ values }) {
  const [arrowUp, setArrowUp] = useState(false);
  const [showInputdropdownList, setShowInputdropdownList] = useState(false);
  const [inputdropdownValues, setInputdropdownValues] = useState([]);

  const handleClickInputdropdownItem = (e) => {
    setShowInputdropdownList((prev) => !prev);
    if (!inputdropdownValues.includes(e.target.innerText))
      setInputdropdownValues((prev) => [...prev, e.target.innerText]);
    setArrowUp((prev) => !prev);
  };

  return (
    <div className={cx("input-dropdown")}>
      <div
        className={cx("input-dropdown-header")}
        onClick={() => {
          setShowInputdropdownList((prev) => !prev);
          setArrowUp((prev) => !prev);
        }}
      >
        {inputdropdownValues.map((value, index) => (
          <div className={cx("input-dropdown-result")} key={index}>
            {value}
            <i
              className={cx("input-dropdown-result-delete", "icon-cross")}
              onClick={(e) => {
                e.stopPropagation();
                setInputdropdownValues((prev) =>
                  prev.filter((a) => a !== value)
                );
              }}
            />
          </div>
        ))}
        <i
          className={cx("input-dropdown-icon", "icon-arrow", { up: arrowUp })}
        />
      </div>
      {showInputdropdownList && (
        <ul className={cx("input-dropdown-list")}>
          {values.map((value, index) => {
            return (
              <li
                key={index}
                className={cx("input-dropdown-item")}
                onClick={handleClickInputdropdownItem}
              >
                {value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default InputDropDown;
