import styles from "./AdminAddProduct.module.scss";
import classnames from "classnames/bind";
import PhotoInput from "./PhotoInput";
import Field from "./Field";
import { useState } from "react";
import InputDropDown from "./InputDropdown";

const cx = classnames.bind(styles);

function AdminAddProduct() {
  return (
    <div className={cx("wrapper")}>
      <form className={cx("container")}>
        <Field title="PHOTOS">
          <PhotoInput />
          <PhotoInput />
          <PhotoInput />
          <PhotoInput />
        </Field>
        <Field title="CATEGORIES">
          <InputDropDown
            values={[
              "Rompers / Jumpsuits",
              "Casual dresses",
              "Going out dresses",
              "Party / Ocassion dresses",
              "Mini dresses",
              "Maxi / Midi dresses",
              "Sets"
            ]}
          />
        </Field>
        <Field title="SIZE">
          <InputDropDown
            values={[
              "S", "M", "L", "XL"
            ]}
          />
        </Field>
      </form>
    </div>
  );
}

export default AdminAddProduct;
