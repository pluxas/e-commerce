import React from 'react'

import styles from './Top.module.scss'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../slice/addCartSlice'

const Position = ({children, product}) => {
    const dispatch = useDispatch()

    const addCart = () => {
        dispatch(addToCart(product))
    }

  return (
    <button onClick={addCart} className={styles['button']}>{children}</button>
  )
}

export default Position