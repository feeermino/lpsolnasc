import styles from '../styles/Cta.module.sass'
const arrow = require('../public/images/arrow-r.svg')

export default function BlueCta(props) {
  return (
    <button type={props.type} className={styles.blueCta}>
      <span>{props.text}</span>
      <div className={styles.arrowWrapperR}>
        <img className={styles.arrowR} src={arrow} alt=""/>
      </div>
    </button>
  )
}