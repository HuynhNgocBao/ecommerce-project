import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import styles from './defaultLayout.module.scss';
import classnames from 'classnames/bind';
const cx = classnames.bind(styles);
function DefaultLayout({children}) {
    return <>
            <Header/>
                {children}
            <Footer/>
    </>;
}

export default DefaultLayout;