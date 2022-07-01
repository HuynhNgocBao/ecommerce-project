import styles from "./AdminAddProduct.module.scss";
import axios from "axios";
import classnames from "classnames/bind";
import PhotoInput from "./PhotoInput";
import FieldWrapper from "./FieldWrapper";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Button from "src/components/Button";
import { productConstants } from "src/app/constants";

const cx = classnames.bind(styles);

function AdminAddProduct() {
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState({
    gender: "",
    type: "",
    name: "",
    categories: [],
    brand: "",
    price: 0,
    size: [],
    colors: [],
    quantity: 0,
    description: "",
  });
  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();

    photos.forEach((value) => {
      data.append("file", value);
    });
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    axios.post("/api/product/checkbeforeaddproduct", formData).then(() => {
      axios
        .post("/api/product/addproduct", data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {})
        .catch((err) => console.log(err));
    })
    .catch(err=>console.log(err));
  };
  return (
    <div className={cx("wrapper")}>
      <form className={cx("container")}>
        <FieldWrapper title="PHOTOS">
          <PhotoInput onUpdate={setPhotos} />
          <PhotoInput onUpdate={setPhotos} />
          <PhotoInput onUpdate={setPhotos} />
          <PhotoInput onUpdate={setPhotos} />
        </FieldWrapper>
        <FieldWrapper title="GENDER">
          <Dropdown
            setFormData={setFormData}
            field="gender"
            values={Object.keys(productConstants).map((constantsKey, index) => {
              return constantsKey;
            })}
          />
        </FieldWrapper>
        <FieldWrapper title="TYPE">
          <Dropdown
            parent={[formData.gender]}
            setFormData={setFormData}
            field="type"
            values={
              formData.gender && productConstants[formData.gender]
                ? Object.keys(productConstants[formData.gender]).map(
                    (constantsKey, index) => {
                      return constantsKey;
                    }
                  )
                : []
            }
          />
        </FieldWrapper>
        <FieldWrapper title="NAME">
          <input
            className={cx("field-input")}
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FieldWrapper>
        <FieldWrapper title="CATEGORIES">
          <Dropdown
            parent={[formData.gender, formData.type]}
            setFormData={setFormData}
            field="categories"
            values={
              productConstants[formData.gender]?.[formData.type]
                ? productConstants[formData.gender][formData.type].map(
                    (value, index) => {
                      return value;
                    }
                  )
                : []
            }
            multiplechoice
          />
        </FieldWrapper>
        <FieldWrapper title="BRAND">
          <Dropdown
            setFormData={setFormData}
            field="brand"
            values={["Zara", "H&M", "Pull&Bear", "Dior", "Chanel"]}
          />
        </FieldWrapper>
        <FieldWrapper title="PRICE ($)">
          <input
            className={cx("field-input")}
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </FieldWrapper>
        <FieldWrapper title="SIZE">
          <Dropdown
            setFormData={setFormData}
            field="size"
            values={["S", "M", "L", "XL"]}
            multiplechoice
          />
        </FieldWrapper>
        <FieldWrapper title="COLORS">
          <Dropdown
            setFormData={setFormData}
            field="colors"
            values={["Blue", "Brown", "White", "Black"]}
            multiplechoice
          />
        </FieldWrapper>
        <FieldWrapper title="QUANTITY">
          <input
            className={cx("field-input")}
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </FieldWrapper>
        <FieldWrapper title="DESCRIPTION">
          <input
            className={cx("field-input")}
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FieldWrapper>
        <div className={cx("submit")}>
          <Button className={cx("form-button")} secondary>
            Cancel
          </Button>
          <Button className={cx("form-button")} onClick={handleSubmit} primary>
            Complete
          </Button>
        </div>
      </form>
    </div>
  );
}

export default AdminAddProduct;
