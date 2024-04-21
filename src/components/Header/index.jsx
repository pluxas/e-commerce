import React from "react";

import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import user from "../../assets/images/user.png";
import phone from "../../assets/icons/phone.png";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import { NavProduct } from "../../products/productNav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ handleChange }) => {
  const product = useSelector((state) => state.product.product);
  const totalPrice = product.reduce((acc, price) => (acc += price.became), 0);

  return (
    <header className={styles["header"]}>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <div className={styles["header__block"]}>
        <div className={styles["header__block1"]}>
          <ul className={styles["header__block1-titles"]}>
            <li className={styles["header__block1-title"]}>О нас</li>
            <li className={styles["header__block1-title"]}>
              Доставка и оплата
            </li>
            <li className={styles["header__block1-title"]}>Контакты</li>
            <li className={styles["header__block1-title"]}>Бонусы</li>
            <li className={styles["header__block1-title"]}>Вакансии</li>
          </ul>
          <div className={styles["header__block1-phone"]}>
            <div className={styles["block"]}>
              <img src={phone} alt="" />
              <p>+7 (495) 617-14-24</p>
            </div>
            <p className={styles["block__open"]}>c 10:00 до 23:00</p>
          </div>
          <div className={styles["header__block1-cart"]}>
            <p className={styles["sum"]}>{totalPrice} ₽</p>
            <div className={styles["line"]}></div>
            <div className={styles["cart"]}>
              <div className={styles["round"]}>
                <span>{product.length}</span>
              </div>
              <div onClick={handleChange} className={styles["cart-icon"]}>
                <GlobalSvgIcons id="cart" />
              </div>
            </div>
          </div>
          <NavLink className={styles["header__block1-user"]}>
            <img src={user} alt="" />
          </NavLink>
        </div>
        <div className={styles["header__block2"]}>
          {NavProduct.map((asd) => (
            <NavLink to={asd.link} className={styles["header__block2-div"]}>
              <GlobalSvgIcons id={asd.image} />
              <p>{asd.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
