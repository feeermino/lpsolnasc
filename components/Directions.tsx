import styles from '../styles/Directions.module.sass'
import BlueCta from './BlueCta'
// AIzaSyCwxetLIIP3yb9g51LZiK5Xr4rwPKq6DZU


export default function Directions() {
  return (
    
    <div className={styles.container}>
      <div className={styles.info}>
        <h2>Localização Privilegiada</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ligula, fringilla vitae dictum at, lobortis eget purus.</p>
        <BlueCta text="Fale conosco" />
      </div>
      <div className={styles.mapContainer}>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3470.8281750133124!2d-49.88971788421694!3d-29.550497815439375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95227cf228e29b5f%3A0xa83d8b6743b0f692!2sImobiliaria%20Osmar!5e0!3m2!1spt-BR!2sbr!4v1603212187756!5m2!1spt-BR!2sbr" allowFullScreen={false} aria-hidden={false} tabIndex={0}></iframe>
      </div>
    </div>
    
  )
}