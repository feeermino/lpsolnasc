

import styles from '../styles/Contact.module.sass'
import BlueCta from './BlueCta'

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}></div>
        <form name="contact" method="POST" data-netlify="true">
          <input type="text" name="name" />
          <input type="email" name="email" />
          <BlueCta type="submit" text="Enviar" />
        </form>
      </div>
    </div>
  )
}