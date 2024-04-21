import React, { useState } from 'react'

import styles from './ModalReviews.module.scss'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import ButtonTwo from '../Buttons/ButtonTwo'

const ModalReviews = ({modal, setOpenModal}) => {
    const [star, setStar] = useState()

    const handleChange = () => {
        setOpenModal(false)
    }

    const stars = Array(5).fill(0)

  return (
    <div className={modal ? styles['modal_active'] : styles['modal']}>
        {modal ? 
        <div className={styles['modal__wrapper']}>
            <div onClick={handleChange} className={styles['modal__wrapper-close']}>
                <GlobalSvgIcons id='close'/>
            </div>
            <h1>Оставить отзыв</h1>
            <div className={styles['modal__wrapper-review']}>
                <p>Ваша оценка</p>
                <div className={styles['stars']}>
                    {stars.map((item, index) => {
                        return (
                            <div key={index} onClick={() => setStar(index)} >
                                {index <= star ? <GlobalSvgIcons id='star'/> :  <GlobalSvgIcons id='star2'/>}
                            </div>
                        )
                    })}
                </div>
            </div> 
            <input className={styles['modal__wrapper-input']} type="text" placeholder='Напишите Ваш отзыв'/>
            <div className={styles['modal__wrapper-inputs']}>
                <input type="number" placeholder='Телефон'/>
                <input type="text" placeholder='Ваше имя и фамилия'/>
            </div>
            <div className={styles['modal__wrapper-photo']}>
                <p>Прикрепить фото</p>
                <div>
                    <GlobalSvgIcons id='clip'/>
                </div>
            </div>
            <div onClick={handleChange} className={styles['modal__wrapper-button']}>
                <ButtonTwo>Оставить отзыв</ButtonTwo>
            </div>
        </div> : ''}
    </div>
  )
}

export default ModalReviews