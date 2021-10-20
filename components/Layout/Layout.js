import Header from '../Header/Header'
import style from './Layout-style';
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';

const Layout = props => (
   <div>
      <Meta />

      <div className="container">
         <Header />
         { props.children }
      </div>
      
      <div className="footer">
         <div className="container">
            <Footer />
         </div>
      </div>

      <style jsx>{ style }</style>
   </div>
)

export default Layout;