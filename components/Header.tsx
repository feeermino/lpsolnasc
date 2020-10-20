import styles from '../styles/Header.module.sass'
import BlueCta from './BlueCta'
const logo = require('../public/images/logo-horiz.svg')

export default function Header() {
  
  return (
    <div className={styles.container}>
      <div className={styles.navWrapper}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt=""/>
        </div>
        <BlueCta text="Fale conosco" />
      </div>
    </div>
  )
}