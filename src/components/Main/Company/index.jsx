import React from 'react'

import styles from './Company.module.scss'
import heart from '../../../assets/images/heart.png'
import img from '../../../assets/images/img 1.png'
import img2 from '../../../assets/images/img 2.png'

const Company = () => {
  return (
    <div className={styles['block']}>
        <div className={styles['block__left']}>
            <div className={styles['block__left-title']}>
                <h1>О компании</h1>
                <img src={heart} alt="" />
            </div>
            <p className={styles['block__left-text']}>Вкусная доставка Рикша подарит Вам незабываемые вкусовые впечатления, украсит любой ваш стол и не заставит себя долго ждать. С нами вы сможете забыть о готовке, легко сделать приятное родным и близким, устроить вкусный праздник или расслабится в кругу друзей. Все блюда готовятся исключительно из свежих продуктов и по оригинальным рецептам Нашего шеф-повара. <br /> Любая позиция из Нашего Меню может оказаться у Вас на столе максимум через 60 минут! У вас есть возможность сделать предварительный заказ на определенный день и время. </p>
        </div>
        <div className={styles['block__right']}>
            <img src={img} alt="" />
            <img src={img2} alt="" />
        </div>
    </div>
  )
}

export default Company