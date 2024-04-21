import React from 'react'

import styles from './About.module.scss'
import free from '../../../assets/images/free.png'
import deliver from '../../../assets/images/delever.png'
import give from '../../../assets/images/podarim.png'
import fresh from '../../../assets/images/fresh.png'
import first from '../../../assets/images/1.png'
import second from '../../../assets/images/2.png'
import third from '../../../assets/images/3.png'
import forth from '../../../assets/images/4.png'

const About = () => {
  return (
    <div className={styles['block']}>
        <div className={styles['block__free']}>
            <div className={styles['block__free-img']}>
                <img src={free} alt="" />
            </div>
            <img src={first} alt="" />
            <h2>доставка</h2>
            <p>при заказе от 600 ₽ </p>
        </div>
        <div className={styles['block__deliver']}>
            <div>
                <img src={deliver} alt="" />
            </div>
            <img src={second} alt="" />
            <h2>за 60 мин</h2>
            <p>или проморол за опоздание </p>
        </div>
        <div className={styles['block__give']}>
            <div>
                <img src={give} alt="" />
            </div>
            <img src={third} alt="" />
            <h2>бонусы</h2>
            <p>бонусная система 1 ₽ = 1 бонус</p>
        </div>
        <div className={styles['block__fresh']}>
            <div>
                <img src={fresh} alt="" />
            </div>
            <img src={forth} alt="" />
            <h2>продукты</h2>
            <p>Никаких заготовок! </p>
        </div>
    </div>
  )
}

export default About