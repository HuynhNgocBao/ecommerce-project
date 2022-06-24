import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Sidebar from 'src/components/Sidebar';
import styles from './SidebarLayout.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

function SidebarLayout({children}) {
    return <>
        <Header/>
        <div className={cx("wrapper")}>
            <div className={cx("container")}>
                <Sidebar/>
                {children}
            </div>
        </div>
        <Footer/>
    </>;
}

export default SidebarLayout;