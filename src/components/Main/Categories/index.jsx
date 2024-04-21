import React from 'react'

import styles from './Categories.module.scss'
import GlobalSvgIcons from '../../../assets/icons/GlobalSvgIcons'
import { NavProduct } from '../../../products/productNav'
import { ProductMain } from '../../../products/productMain'
import ButtonTwo from '../../Buttons/ButtonTwo'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CategoriesButton from './CategoriesButton'

const Categories = () => {
    const dispatch = useDispatch()

    const addTopCart = () => {
        dispatch(addTopCart())
    }

  return (
    <div className={styles['block']}>
        <div className={styles['block__header']}>
            <h1 className={styles['block__header-title']}>Категории</h1>
            <div>
                <GlobalSvgIcons id='stick'/>
            </div>
        </div>
        <div className={styles['block__product']}>
            <div className={styles['block__nav']}>
                {NavProduct.map(block => (
                    <div className={styles['block__nav-product']}> 
                        <div>
                            <GlobalSvgIcons id={block.image}/>
                        </div>
                        <p>{block.name}</p>
                    </div>
                ))}
            </div>
            <div className={styles['block__products']}>
                {ProductMain.map(product => (
                          <div className={styles["block__products-product"]}>
                          <div className={styles["block__image"]}>
                            <img src={product.img} alt="" />
                            <img
                              className={styles["block__image-icon"]}
                              src={product.icon}
                              alt=""
                            />
                            <div>
                              <img src={product.icon_two} alt="" />
                            </div>
                          </div>
                          <div className={styles["block__about"]}>
                            <div className={styles["block__about-mass"]}>
                              <p>{product.mass}</p>
                              <div></div>
                              <p>{product.call}</p>
                            </div>
                            <h2 className={styles["block__about-name"]}>{product.name}</h2>
                            <p className={styles["block__about-text"]}>{product.filling}</p>
                            <div className={styles["block__about-size"]}>
                              <span>+150₽ </span>
                              <p>30 см</p>
                              <div></div>
                              <p>50 см</p>
                            </div>
                            <div className={styles["block__about-footer"]}>
                              <div className={styles["block__about-footer-text"]}>
                                <p>{product.price_was}</p>
                                <div className={styles["line"]}></div>
                                <p>{product.became} ₽</p>
                              </div>
                              <CategoriesButton product={product}>Заказать</CategoriesButton>
                            </div>
                          </div>
                        </div>
                ))}
            </div>
        </div>
        <div className={styles['block__footer']}>
            <div className={styles['block__footer-left']}>
                <div>
                    <GlobalSvgIcons id='left_two'/>
                </div>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <div>
                    <GlobalSvgIcons id='right'/>
                </div>
            </div>
            <div className={styles['block__footer-right']}>
                <NavLink to='/pizza'><h2>Перейти в каталог</h2></NavLink>
                <div>
                    <GlobalSvgIcons id='right'/>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Categories