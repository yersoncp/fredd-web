import Link from 'next/link';
import s from './Footer.module.css';

const linkDribbble = '//dribbble.com/yerson';
const linkMedium = '//medium.com/hifredd';
const linkContact = 'mailto:hola@zurvin.com';
const linkGithubCode = '//github.com/yersoncp/zurvin-web-nextjs';

const Footer = () => (
   
   <div>
      <div className={s.footer}>
         <div>
            <Link href="/">
               <a className={s.logo}>
                  <img width="80px" src="images/fredd-white.svg" />
               </a>
            </Link>
            <p className={s.slogan}>
               Estamos construyendo algo que nos apasiona.
            </p>
            
         </div>

         <div>
            <h4>Nosotros</h4>
            <Link href={linkMedium}><a className={s.menu} target="_blank">Blog</a></Link>
            {/* <Link href={linkGithubCode}><a className={s.menu} target="_blank">Open source</a></Link> */}
            {/* <Link href={linkDribbble}><a className={s.menu} target="_blank">Dribbble</a></Link> */}
         </div>

         <div>
            <h4>Contacto</h4>
            <Link href={linkContact}><a className={s.menu} target="_blank">Contacto</a></Link>
         </div>

         <div>
            <div className={s.copyright}>
               <span>2021 © Fredd AI Technology. All rights reserved.</span>
            </div>
         </div>
      </div>

   </div>
)

export default Footer;