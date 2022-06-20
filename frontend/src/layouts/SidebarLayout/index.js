import {Header, Footer} from 'src/layouts/components';
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