import styles from './Footer.module.css';
import logo from '../../icons/logo.svg';
import facebook from '../../icons/facebook.svg'
import instagram from '../../icons/instagram.svg'
import whatsapp from '../../icons/whatsapp.svg'

const contentOne = ["運送說明", "退換貨相關", "付款資訊", "FAQ"]
const contentTwo = ["品牌故事", "媒體聯繫", "Press kit"]
const contentThree = ["隱私權政策", "Cookie", "GDPR"]

function FooterSection({section,title}) {
  return (
    <section className={styles.footerSection} > 
      <h2 className={styles.sectionTitle} >{title}</h2>
      <div className={styles.sectionContent} > 
        {section.map((item, index) =>
          <a key={index} className={styles.pageLink} href="#">{item}</a>
        )}
      </div>
    </section> 
  )
}

export default function Footer() {
  return (
    <>
      <footer className={styles.siteFooter}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLogoContainer}>
            <img className={styles.logoIcon} src={logo} alt="" />
          </div> 
          <FooterSection section={contentOne} title={"客戶服務"}/>
          <FooterSection section={contentTwo} title={"關於我們"}/>
          <FooterSection section={contentThree} title={"資訊"}/> 
          <section className={styles.footerSection} >
              <h2 className={styles.sectionTitle}>追蹤 ALPHA Shop</h2> 
              <div className={styles.sectionContent} >
              <div className={styles.telInfo}>+886 02123-45678</div> 
                <div className={styles.socialIconGroup}> 
                  <img className={styles.socialIcon} src={facebook} alt="" />
                  <img className={styles.socialIcon} src={instagram} alt="" />
                  <img className={styles.socialIcon} src={whatsapp} alt="" />
                </div> 
              </div> 
            </section> 
          </div> 
        </footer>
    </>
  )
}