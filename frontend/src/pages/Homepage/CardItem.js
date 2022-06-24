import styles from "./Homepage.module.scss";
import classnames from "classnames/bind";

const cx = classnames.bind(styles);

function CardItem({title, image}) {
  return (
    <div className={cx("card-item")}>
      <div className={cx("card-item-container")}
      style={{backgroundImage: `url(${image})`}}
      >
        <span className={cx("title")}>{title}</span>
        <button className={cx("shopnow-btn")}>Shop now</button>
      </div>
    </div>
  );
}

export default CardItem;
