import styles from './Header.module.css'
// import toggle from '../../icons/toggle.svg'
import search from '../../icons/search.svg'
import cart from '../../icons/cart.svg'
import moon from '../../icons/moon.svg'
import sun from '../../icons/sun.svg'
import logo from '../../icons/logo.svg'

function NavItems({item}) {
  return (
    <li className={styles.navItem}>
      <a className={styles.navLink} href="#">{item}</a>
    </li>
  )
}

export default function Header() {
  return (
  <header className={styles.siteHeader}>
    <div className={styles.headerContainer}>
      {/* navbar-toggle  */}
      {/* <input id="navbar-toggle" className={styles.navbarToggle} type="checkbox" />
      <label for="navbar-toggle" className={styles.burgerContainer}>
        <img src={toggle} alt="" />
      </label> */}

    {/* < navbar-menu  */}
    <nav className={styles.navbarMenu}>
      <ul className={`${styles.navList} ${styles.siteMenuList}`}>
        <NavItems item={"男款"}/>
        <NavItems item={"女款"}/>
        <NavItems item={"最新消息"}/>
        <NavItems item={"客製商品"}/>
        <NavItems item={"聯絡我們"}/>
      </ul>
      <ul className={`${styles.navList} ${styles.siteActionList}`}>
        {/* search  */}
        <li className={styles.navItem}>
          <img className={`${styles.navIcon} ${styles.searchIcon}`} src={search} alt="" />
        </li>
        {/* cart  */}
        <li className={styles.navItem}>
          <img className={`${styles.navIcon} ${styles.cartIcon}`} src={cart} alt="" />
        </li>
        <li id="theme-toggle" className={styles.navItem}>
          {/* moon  */}
           <img className={`${styles.navIcon} ${styles.moonIcon}`} src={moon} alt="" />
          {/* sun  */}
          <img className={`${styles.navIcon} ${styles.sunIcon}`} src={sun} alt="" />
        </li>
      </ul>
    </nav>

      {/* logo  */}
      <a className={styles.headerLogoContainer} href="#">
        <img src={logo} alt="" />
      </a>
    </div>
  </header>
  )
}
