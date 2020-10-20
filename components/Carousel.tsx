import styles from '../styles/Carousel.module.sass'
// import ScrollContainer from 'react-indiana-drag-scroll'

export default function Carousel() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Galeria de imagens</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et justo eget lacus tincidunt pretium at ut nunc. Ut porta ultricies odio non hendrerit. Etiam maximus vitae eros eget congue.</p>
        </div>
        
          <div className={styles.slider} >
            <div className={styles.images}>
              <img src={require('./../public/images/slider/14.png')} alt=""/>
            </div>
          </div>

      </div>
    </div>
  )
}