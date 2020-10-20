import styles from '../styles/Cta.module.sass'
const arrowDown = require('../public/images/arrow-down.svg')

export default function YellowCta() {
  return (
    <button className={styles.yellowCta}>
      <span>SAIBA MAIS</span>
      <div className={styles.arrowWrapperDown}>
        <img className={styles.arrowDown} src={arrowDown} alt=""/>
      </div>
    </button>
  )
}