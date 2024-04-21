import React from 'react'

import styles from './Footer.module.scss'
import logo from '../../assets/images/logo_mini.png'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'

const Footer = () => {
  return (
    <div className={styles['footer']}>
        <div className={styles['footer__block']}>
        <img className={styles['footer__logo']} src={logo} alt="" />
        <div className={styles['footer__social-media']}>
            <ul className={styles['footer__social-media-text']}>
                <li>О нас</li>
                <li>Доставка и оплата</li>
                <li>Контакты</li> 
            </ul>
            <div className={styles['footer__social-media-s']}>
                <GlobalSvgIcons id='facebook'/>
                <GlobalSvgIcons id='instagram'/>
                <GlobalSvgIcons id='vk'/>
            </div>
        </div>
        <div className={styles['footer__products']}>
            <ul className={styles['footer__products-words']}>
                <li>Пицца</li>
                <li>Суши</li>
                <li>Роллы</li>
                <li>Сеты</li>
                <li>Wok</li>
            </ul>
            <ul className={styles['footer__products-words']}>
                <li>Супы</li>
                <li>Салаты</li>
                <li>Десерты</li>
                <li>Напитки</li>
                <li>Акции</li>
            </ul>
        </div>
        <div className={styles['footer__contacts']}>
            <h1 className={styles['footer__contacts-number']}>+7 (495) 617-14-24</h1>
            <p className={styles['footer__contacts-work']}>c 10:00 до 23:00</p>
            <p className={styles['footer__contacts-license']}>© Рикша. Все права защищены.</p>
        </div>
        </div>
    </div>
  )
}

export default Footer