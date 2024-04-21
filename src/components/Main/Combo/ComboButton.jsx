import React from 'react'

import styles from './Combo.module.scss'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../slice/addCartSlice'

const ComboButton = ({children, product}) => {
    const dispatch = useDispatch()

    const addProduct = () => {
        dispatch(addToCart(product))
    }

  return (
    <button onClick={addProduct} className={styles['button']}>{children}</button>
  )
}

export default ComboButton