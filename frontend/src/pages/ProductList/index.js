import styles from "./ProductList.module.scss";
import classnames from "classnames/bind";
import Sidebar from "src/components/Sidebar";

const cx = classnames.bind(styles);

function ProductList() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Sidebar/>
            </div>
        </div>
    );
}

export default ProductList;