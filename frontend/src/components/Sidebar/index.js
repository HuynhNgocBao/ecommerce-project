import styles from './Sidebar.module.scss';
import classnames from "classnames/bind";
const cx = classnames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx("wrapper")}>
            <div className={cx("category")}>
                <span className={cx("category-title")}>Category</span>
                <ul className={cx("category-list")}>
                    <li className={cx("category-item")}>All dresses</li>
                    <li className={cx("category-item")}>Rompers / Jumpsuits</li>
                    <li className={cx("category-item")}>Casual dresses</li>
                    <li className={cx("category-item")}>Going out dresses</li>
                    <li className={cx("category-item")}>Party / Ocassion dresses</li>
                    <li className={cx("category-item")}>Mini dresses</li>
                    <li className={cx("category-item")}>Maxi / Midi dresses</li>
                    <li className={cx("category-item")}>Sets</li>
                </ul>
            </div>
            <div className={cx("filter")}></div>
        </aside>
    );
}

export default Sidebar;