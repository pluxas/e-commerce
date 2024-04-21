import React from 'react'

import styles from './Navbar.module.scss'
import Button from '../../Buttons/Button'
import navbar from '../../../assets/images/navbar.png'
import GlobalSvgIcons from '../../../assets/icons/GlobalSvgIcons'

const Navbar = () => {
  return (
    <nav className={styles['nav']}>
        <div className={styles['nav__block']}>
            <div className={styles['nav__block-left']}>
                <Button>
                    <GlobalSvgIcons id='left'/>
                </Button>
            </div>
            <div className={styles['nav__block-block']}>
                <div className={styles['nav__block-text']}>
                    <h2 className={styles['title']}>Калифорния <span>в подарок</span> <br /> при первом заказе</h2>
                    <p className={styles['text']}>от 1500 ₽ </p>
                </div>
                <img src={navbar} alt="" />
            </div>
            <div className={styles['nav__block-right']}>
                <Button>
                    <GlobalSvgIcons id='right'/>
                </Button>
            </div>
            <button className={styles['nav__block-more']}>
                Подробнее
            </button>
        </div>
    </nav>
  )
}

export default Navbar