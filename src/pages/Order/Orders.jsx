import React from 'react'

import styles from './Order.module.scss'
import { useDispatch } from 'react-redux';
import { removeToCart } from '../../slice/addCartSlice';
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons';

const Orders = ({product}) => {
  const { id, name, img, became, count } = product;
  const dispatch = useDispatch();
  

  const deleteProduct = () => {
    dispatch(removeToCart(id));
  };

  return (
    <>
      <div className={styles['line']}></div>
      <div className={styles["block__modal"]}>
        <div className={styles["block__modal-image"]}>
          <img src={img} alt="" />
          <h1>{name}</h1>
        </div>
        <div className={styles["about"]}>
          <div className={styles["block__modal-count"]}>
            <p>-</p>
            <span>{count}</span>
            <p>+</p>
          </div>
          <h1 className={styles["block__modal-price"]}>{became} ₽</h1>
          <div onClick={deleteProduct} className={styles["block__modal-trash"]}>
            <GlobalSvgIcons id="trash" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders