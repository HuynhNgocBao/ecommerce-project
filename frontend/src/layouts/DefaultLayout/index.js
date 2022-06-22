import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import './defaultLayout.module.scss'
function DefaultLayout({children}) {
    return <div>
        <Header/>
        <div>
            {children}
        </div>
        <Footer/>
    </div>;
}

export default DefaultLayout;