import Footer from "./Footer"
import NavHeader from "./NavHeader"

const Layout = ({children}) => {
    return ( 
        <div>
            <NavHeader/>
            {children}
            <Footer/>
        </div>
     );
}
 
export default Layout;