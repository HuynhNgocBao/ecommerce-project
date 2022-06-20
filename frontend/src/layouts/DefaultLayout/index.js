import {Header, Footer} from 'src/layouts/components'
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