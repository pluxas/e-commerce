import React from 'react'

import styles from './Pizza.module.scss'
import { ProductMain } from '../../products/productMain'
import ButtonTwo from '../../components/Buttons/ButtonTwo'
import CategoriesButton from '../../components/Main/Categories/CategoriesButton'

const Pizza = () => {
  return (
    <div className={styles['block']}>
      <h3 className={styles['block__page']}>Главная // <span>Пицца</span></h3>
      <div className={styles['block__header']}>
        <h1 className={styles['block__header-name']}>Пицца</h1>
        <div>
          <h3>Сортировка</h3>
          <select name="" id="">
            <option value="">По умолчанию</option>
            <option value="">Острое</option>
            <option value="">Новое</option>
          </select>
        </div>
      </div>
      <div className={styles['block__product']}>
        {ProductMain.map(product => (
          <div className={styles['block__product-product']}>
          <div className={styles['block__image']}>
              <img src={product.img} alt="" />
              <img className={styles['block__image-icon']} src={product.icon} alt="" />
              <div>
                  <img src={product.icon_two} alt="" />
              </div>
          </div>
          <div className={styles['block__about']}>
              <div className={styles['block__about-mass']}>
                  <p>{product.mass}</p>
                  <div></div>
                  <p>{product.call}</p>
              </div>
              <h2 className={styles['block__about-name']}>{product.name}</h2>
              <p className={styles['block__about-text']}>{product.filling}</p>
              <div className={styles['block__about-size']}>
                  <span>+150₽ </span>
                  <p>30 см</p>
                  <div></div>
                  <p>50 см</p>
              </div>
              <div className={styles['block__about-footer']}>
                  <div className={styles['block__about-footer-text']}>
                      <p>{product.price_was}</p>
                      <div className={styles['line']}></div>
                      <p>{product.became} ₽</p>
                  </div>
                  <CategoriesButton product={product}>
                      Заказать
                  </CategoriesButton>
              </div>
          </div>  
      </div>
        ))}
      </div>
    </div>
  )
}

export default Pizza