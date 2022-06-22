import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Sidebar from './Sidebar';

function SidebarLayout({children}) {
    return <div>
        <Header/>
        <div>
            <Sidebar/>
            {children}
        </div>
        <Footer/>
    </div>;
}

export default SidebarLayout;