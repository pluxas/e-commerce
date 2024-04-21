import React from 'react'

import styles from './Sale.module.scss'
import wave from '../../../assets/images/wave.png'
import wavesvg1 from '../../../assets/images/wave-svg.png'
import wavesvg2 from '../../../assets/images/wave-svg2.png' 
import wavesvg3 from '../../../assets/images/wave-svg3.png' 
import GlobalSvgIcons from '../../../assets/icons/GlobalSvgIcons'

const Sale = () => {
  return (
    <div className={styles['block']}>
        <div className={styles['block__header']}>
            <h1>Акции</h1>
            <div>
                <GlobalSvgIcons id='group'/>
            </div>
        </div>
        <div className={styles['block__list']}>
            <div className={styles['block__list-first']}>
                <h2 className={styles['block__list-first-title']}>Празднуй день рождения вместе с нами</h2>
                <p className={styles['block__list-first-text']}>Ролл в подарок при заказе в день рождения</p>
                <img className={styles['svg']} src={wavesvg1} alt="" />
                <div className={styles['block__list-first-img']}>
                    <img src={wave} alt="" />
                </div>
            </div>
            <div className={styles['block__list-second']}>
                <h2 className={styles['block__list-first-title']}>Доставим заказ за 60 мин</h2>
                <p className={styles['block__list-first-text']}>или проморол за опоздание</p>
                <img className={styles['svg']} src={wavesvg2} alt="" />
                <div className={styles['block__list-first-img']}>
                    <img src={wave} alt="" />
                </div>
            </div>
            <div className={styles['block__list-third']}>
                <h2 className={styles['block__list-first-title']}>Приведи друга </h2>
                <p className={styles['block__list-first-text']}>и получи 250 ₽ на бонусный счет</p>
                <img className={styles['svg']} src={wavesvg3} alt="" />
                <div className={styles['block__list-first-img']}>
                    <img src={wave} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sale