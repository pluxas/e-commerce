import React from 'react'

import styles from './ButtonTwo.module.scss'
// import { ProductMain } from '../../../products/productMain'

const ButtonTwo = ({children}) => {
  return (
    <button className={styles['button']}>
        {children}
    </button>
  )
}

export default ButtonTwo