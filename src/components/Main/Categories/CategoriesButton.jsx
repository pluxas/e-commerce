import React from 'react'

import styles from './Categories.module.scss'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../../slice/addCartSlice'

const CategoriesButton = ({product, children}) => {
    const dispatch = useDispatch()

    const addProduct = () => {
        dispatch(addToCart(product))
    }

  return (
    <button className={styles['button']} onClick={addProduct}>{children}</button>
  )
}

export default CategoriesButton