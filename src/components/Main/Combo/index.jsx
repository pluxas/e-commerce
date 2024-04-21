import React from 'react'

import styles from './Combo.module.scss'
import bg from '../../../assets/images/bg.png'
import GlobalSvgIcons from '../../../assets/icons/GlobalSvgIcons'
import Button from '../../Buttons/Button'
import { ComboProducts } from '../../../products/ComboProducts'
import ComboButton from './ComboButton'

const Combo = () => {
  return (
    <>
        <div className={styles['block']}>
        <div className={styles['block__header']}>
            <h1 className={styles['block__header-title']}>Комбо меню</h1>
            <div className={styles['block__header-img']}>
                <GlobalSvgIcons id='hugs'/>
            </div>
        </div>
        <div className={styles['block__list']}>
            {ComboProducts.map(product => (
                <div className={styles['block__list-product']}>
                    <div className={styles['img']}>
                        <img src={product.img} alt="" />
                        <img className={styles['img__text']} src={product.icon} alt="" />
                    </div>
                <div className={styles['texts']}>
                    <div>
                        <p className={styles['texts__mass']}>200 грамм <div></div> 130 Ккал</p>
                        <h2>{product.name}</h2>
                        <p>{product.filling}</p>
                    </div>
                    <div>
                        <div className={styles['texts__size']}>
                            <span>+150₽ </span>
                            <p>30 см</p>
                            <div></div>
                            <p>50 см</p>
                        </div>
                    </div>
                </div>
                <div className={styles['footer']}>
                    <div className={styles['footer__price']}>
                        <span>{product.price_was}</span>
                        <div className={styles['line']}></div>
                        {product.became} ₽
                    </div>
                    <div className={styles['footer__button']}>
                        <ComboButton product={product}>
                            Заказать
                        </ComboButton>
                    </div>
                </div>
                </div>
            ))}
            
        </div>
        <div className={styles['block__right']}>
            <Button>
                <GlobalSvgIcons id='right'/>
            </Button>
        </div>
        </div>  
        <img className={styles['bg']} src={bg} alt="" />
    </>
  )
}

export default Combo 