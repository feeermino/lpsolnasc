import styles from '../styles/Planta.module.sass'
import BlueCta from './BlueCta'


const planta = require('../public/images/planta-loteamento.png')
const location = require('../public/images/location-icon.svg')

const orange = require("../public/images/orange.svg")
const blue = require("../public/images/blue.svg")
const green = require("../public/images/green.svg")
const red = require("../public/images/red.svg")

const bulb = require("../public/images/bulb-icon.svg")
const trees = require("../public/images/trees-icon.svg")
const energy = require("../public/images/energy-icon.svg")
const praca = require("../public/images/praca-icon.svg")
const tubes = require("../public/images/tubes-icon.svg")
const water = require("../public/images/water-icon.svg")
const pavement = require("../public/images/pavement-icon.svg")


export default function Planta() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.sectionInfo}>
          <div className={styles.description}>
            <h2>Lotes de 360m² a 674m²</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ligula, fringilla vitae dictum at, lobortis eget purus.</p>
          </div>
          <div className={styles.location}>
            <img src={location} alt=""/>
            <span>
              <h3>Avenida Interpraias Sul</h3>
              <p>Sentido Centro Arroio do Sal</p>
            </span>
          </div>
        </div>

        <div className={styles.plantaWrapper}>          
          <img className={styles.planta} src={planta} alt=""/>
          <div className={styles.legenda}>
            <div className={styles.legendaItem}>
              <img src={green} alt=""/>
              <p>Praça Arborizada</p>
            </div>
            <div className={styles.legendaItem}>
              <img src={blue} alt=""/>
              <p>Avenida Interpraias Sul</p>
            </div>
            <div className={styles.legendaItem}>
              <img src={orange} alt=""/>
              <p>Calçadão à Beira-mar</p>
            </div>
            <div className={styles.legendaItem}>
              <img src={red} alt=""/>
              <p>Passarela com Deck</p>
            </div>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.icons}>

          <div className={styles.iconItem}>
            <img src={praca} alt=""/>
            <h3>Praça<br/> Exclusiva</h3>
          </div>
          <div className={styles.iconItem}>
            <img src={trees} alt=""/>
            <h3>Ruas<br/>  Arborizadas</h3>
          </div>
          <div className={styles.iconItem}>
            <img src={pavement} alt=""/>
            <h3>Ruas<br/>  Pavimentadas</h3>
          </div>
          <div className={styles.iconItem}>
            <img src={bulb} alt=""/>
            <h3>Iluminação<br/>  Pública</h3>
          </div>
          <div className={styles.iconItem}>
            <img src={energy} alt=""/>
            <h3>Rede<br/>  Elétrica</h3>
          </div>
          <div className={styles.iconItem}>
            <img src={water} alt=""/>
            <h3>Rede<br/>  de Água</h3>
          </div>
          <div className={styles.iconItem}>
            <img src={tubes} alt=""/>
            <h3>Sistema de<br/>  Drenagem <br/> Pluvial</h3>
          </div>
          <div className={styles.cta}>
          <BlueCta text="Fale conosco" />
          </div>

        </div>

      </div>
    </div>
  )
}