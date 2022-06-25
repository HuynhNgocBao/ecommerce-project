import styles from "./Homepage.module.scss";
import classnames from "classnames/bind";
import Button from "src/components/Button";

const cx = classnames.bind(styles);

function CardItem({title, image}) {
  return (
    <div className={cx("card-item")}>
      <div className={cx("card-item-container")}
      style={{backgroundImage: `url(${image})`}}
      >
        <span className={cx("title")}>{title}</span>
        <Button primary className={cx("shopnow-btn")}>Shop now</Button>
      </div>
    </div>
  );
}

export default CardItem;
