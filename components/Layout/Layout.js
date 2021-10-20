import Header from '../Header/Header'
import Meta from '../Meta/Meta';
import Footer from '../Footer/Footer';
import s from './Layout.module.css';

const Layout = props => (
   <div>
      <Meta />

      <div className={s.container}>
         <Header />
         { props.children }
      </div>
      
      <div className={s.gray}>
         <div className={s.container}>
            <Footer />
         </div>
      </div>
   </div>
)

export default Layout;