import styles from "./AdminAddProduct.module.scss";
import classnames from "classnames/bind";
import { useEffect, useState } from "react";

const cx = classnames.bind(styles);

function DropDown({
  parent = [],
  setFormData,
  field,
  values,
  multiplechoice = false,
}) {
  const [arrowUp, setArrowUp] = useState(false);
  const [showDropdownList, setShowDropdownList] = useState(false);
  const [DropdownValues, setDropdownValues] = useState(() => {
    if (multiplechoice) return [];
    else return "";
  });

  useEffect(() => {
    if (!multiplechoice) setDropdownValues((prev) => "");
    else setDropdownValues((prev) => []);
  }, parent);

  useEffect(() => {
    setFormData((prev) => {
      return { ...prev, [field]: DropdownValues };
    });
  }, [DropdownValues]);

  const handleClickDropdownItem = (e) => {
    setShowDropdownList((prev) => !prev);
    if (!multiplechoice) {
      setDropdownValues((prev) => {
        return e.target.innerText;
      });
    } else if (!DropdownValues.includes(e.target.innerText)) {
      setDropdownValues((prev) => {
        return [...prev, e.target.innerText];
      });
    }
    setArrowUp((prev) => !prev);
  };

  return (
    <div className={cx("dropdown")}>
      <div
        className={cx("dropdown-header")}
        onClick={() => {
          setShowDropdownList((prev) => !prev);
          setArrowUp((prev) => !prev);
        }}
      >
        {multiplechoice &&
          DropdownValues.map((value, index) => (
            <div className={cx("dropdown-result")} key={index}>
              {value}
              <i
                className={cx("dropdown-result-delete", "icon-cross")}
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownValues((prev) => {
                    return prev.filter((a) => a !== value);
                  });
                }}
              />
            </div>
          ))}
        {!multiplechoice && (
          <div className={cx("dropdown-result")}> {DropdownValues}</div>
        )}
        <i className={cx("dropdown-icon", "icon-arrow", { up: arrowUp })} />
      </div>
      {showDropdownList && (
        <ul className={cx("dropdown-list")}>
          {values.map((value, index) => {
            return (
              <li
                key={index}
                className={cx("dropdown-item")}
                onClick={handleClickDropdownItem}
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

export default DropDown;
