import styles from '../styles/Hero.module.sass'
import YellowCta from './YellowCta'

const heroImage = require('../public/images/hero-image.png')
const wave = require('../public/images/wave.svg')

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.contentWrapper}>
            <h1>O amanhecer do seu sonho.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ligula, fringilla vitae dictum at, lobortis eget purus.</p>
            <YellowCta/>
          </div>
        </div>
        <div className={styles.right}>
          <img className={styles.heroImage} src={heroImage} alt=""/>
        </div>
      </div>
      <div className={styles.wave}>
        <img src={wave} alt=""/>
      </div>
    </div>
  )
}