import React from 'react'

import styles from './Block.module.scss'
import ButtonTwo from '../../Buttons/ButtonTwo'
import grid1 from '../../../assets/images/grid1.png'
import grid2 from '../../../assets/images/grid2.png'
import grid3 from '../../../assets/images/grid3.png'
import grid6 from '../../../assets/images/gird4.png'
import grid5 from '../../../assets/images/grid5.png'
import grid4 from '../../../assets/images/grid6.png'

const Grid = () => {
  return (
    <div className={styles['block']}>
        <div className={styles['block__title']}>
            <h1>А вы уже подписались <br /> на наш <span>Instagram?</span></h1>
            <ButtonTwo>
                @riksha_sushi
            </ButtonTwo>
        </div>
        <div className={styles['block__images']}>
            <div className={styles['box']}>
                <img src={grid1} alt="" />
                <img src={grid2} alt="" />
                <img src={grid3} alt="" />
                <img src={grid5} alt="" />
                <img src={grid4} alt="" />
            </div>
            <img src={grid6} alt="" />

        </div>
    </div>
  )
}

export default Grid