import React, { useState } from 'react'

import styles from './Order.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import Orders from './Orders';
import first from '../../assets/images/01.png'
import second from '../../assets/images/02.png'
import third from '../../assets/images/03.png'
import forth from '../../assets/images/04.png'
import map from '../../assets/images/map.png'
import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons';
import { clearCart } from '../../slice/addCartSlice';
import { NavLink } from 'react-router-dom';

const Order = () => {
    const [people, setPeople] = useState(1)
    const [stick, setStick] = useState(1)
    const product = useSelector((state) => state.product.product);
    const totalPrice = product.reduce((acc, price) => (acc += price.became), 0);
    const dispatch = useDispatch()

    const clearProduct = () => {
        dispatch(clearCart())
    }

    const handleChangePeople = () => {
        setPeople(people + 1)
    }

    const handleChangeStick = () => {
        setStick(stick + 1)
    }

    const handlePeople = () => {
        if (people > 1) {
            setPeople(people - 1)
        }
    }

    const handleStick = () => {
        if (stick > 1) {
            setStick(stick - 1)
        }
    }

  return (
    <div className={styles['block']}>
        <h1 className={styles['block__title']}>Оформление заказа</h1>
        <div className={styles['block__about']}>
            <div className={styles['block__about-orders']}>
                {product.map((product) => (
                    <Orders key={product.id} product={product}/>
                ))}
            </div>
            <div className={styles['block__about-registration']}>
                <div className={styles['contact']}>
                    <div>
                        <img src={first} alt="" />
                        <h1>Контактные данные</h1>
                    </div>
                    <div>
                        <input type="text" placeholder='Ваше Имя'/>
                        <input type="number" placeholder='Телефон'/>
                    </div>
                </div>
                <div className={styles['deliver']}>
                    <div className={styles['deliver__header']}>
                        <img src={second} alt="" />
                        <h1>Параметры доставки</h1>
                    </div>
                    <div className={styles['deliver__inputs']}>
                        <div>
                            <input type="radio" name='gender' value='male' id='male'/> <label htmlFor="male">Ближайшее время</label>
                        </div>
                        <div>
                            <input type="radio" name='gender' value='famale' id='famale'/> <label htmlFor="famale">Самовывоз</label>
                        </div>
                        <div>
                            <input type="radio" name='gender' value='other' id='other'/> <label htmlFor="other">На дату / время</label>
                        </div>
                    </div>
                    <div className={styles['deliver__residence']}>
                        <div>
                            <input className={styles['deliver__residence-input']} type="text" placeholder='Улица'/>
                            <input type="text" placeholder='Дом'/>
                        </div>
                        <div>
                            <input type="text" placeholder='Квартира'/>
                            <input className={styles['deliver__residence-input']} type="text" placeholder='Подьезд/Этаж/Домофон'/>
                        </div>
                    </div>
                    <div className={styles['deliver__map']}>
                        <img src={map} alt="" />
                        <div className={styles['deliver__map-time']}>
                            <div>
                                <GlobalSvgIcons id='scutor'/>
                            </div>
                            Доставим за 40 мин
                        </div>
                    </div>
                </div>
                <div className={styles['payment']}>
                    <div className={styles['payment__settings']}>
                        <img src={third} alt="" />
                        <h1>Параметры оплаты</h1>
                    </div>
                    <div className={styles['payment__inputs']}>
                        <div>
                            <input type="radio" name='gender' value='damale' id='damale'/> <label htmlFor="damale">Наличные</label>
                        </div>
                        <div>
                            <input type="radio" name='gender' value='gamale' id='gamale'/> <label htmlFor="gamale">Онлайн оплата</label>
                        </div>
                    </div>
                    <div className={styles['payment__assignments']}>
                        <h1>Подготовить сдачу с :</h1>
                        <div className={styles['payment__assignments-input']}>
                            <input type="number" placeholder='Введите сумму'/>
                            <div>
                                <input type="checkbox" />Без сдачи
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles['finish']}>
                    <div className={styles['finish__header']}>
                        <img src={forth} alt="" />
                        <h1>Последний шаг</h1>
                    </div>
                    <dir className={styles['line']}></dir>
                    <div className={styles['finish__count']}>
                        <div className={styles['finish__count-people']}>
                            <p className={styles['title']}>Количество персон</p>
                            <div>
                                <p onClick={handlePeople}>-</p>
                                <span>{people}</span>
                                <p onClick={handleChangePeople}>+</p>
                            </div>
                        </div>
                        <div className={styles['finish__count-sticks']}>
                            <p>Учебные палочки</p>
                            <div>
                                <p onClick={handleStick}>-</p>
                                <span>{stick}</span>
                                <p onClick={handleChangeStick}>+</p>
                            </div>
                        </div>
                        <h1>Бесплатно</h1>
                    </div>
                    <dir className={styles['line']}></dir>
                    <div className={styles['finish__price']}>   
                        <div className={styles['finish__price-order']}>
                            <h1>Сумма заказа</h1>
                            <span>{totalPrice} ₽</span>
                        </div>
                        <div className={styles['finish__price-deliver']}>
                            <h1>Сумма доставки</h1>
                            <span>0 ₽</span>
                        </div>
                    </div>
                    <dir className={styles['line']}></dir>
                    <div className={styles['finish__promo-code']}>
                        <h1>Промокод</h1>
                        <div className={styles['finish__promo-code-block']}>
                            <h2 className={styles["conditions"]}>Применить</h2>
                            <div></div>
                        </div>
                    </div>
                    <div className={styles['lines']}></div>
                    <div className={styles['finish__result']}>
                        <h1>Итоговая сумма заказа</h1>
                        <span>{totalPrice} ₽</span>
                    </div>
                    <input className={styles['finish__input']} type="text" placeholder='Комментарий к заказу'/>
                    <NavLink to='/deliver' onClick={clearProduct}>
                        <button className={styles['finish__button']}>Подтвердить заказ</button>
                    </NavLink>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default Order