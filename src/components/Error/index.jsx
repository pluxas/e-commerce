import React from 'react'

import styles from './Error.module.scss'
import error from '../../assets/images/error.png'
import ButtonTwo from '../Buttons/ButtonTwo'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <div className={styles['block']}>
      <img src={error} alt="" />
      <h1>Страница не найдена</h1>
      <p>Извините, но страницу, которую Вы пытаетесь найти - не существует. <span>Предлагаем Вам перейти на Главную страницу</span></p>
      <NavLink to='/'>
        <ButtonTwo>
          На главную
        </ButtonTwo>
      </NavLink>
    </div>
  )
}

export default Error