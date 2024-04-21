import React from "react";

import styles from "./Sushi.module.scss";
import { Categories } from "../../products/Categories";
import { Categories__two } from "../../products/Categories_two";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import { ProductSushi } from "../../products/productSushi";
import ButtonTwo from "../../components/Buttons/ButtonTwo";
import Position from "../../components/Main/Top/Position";

const Sushi = () => {
  return (
    <div className={styles["block"]}>
      <h3 className={styles["block__page"]}>
        Главная // <span>Суши</span>
      </h3>
      <h1 className={styles["block__name"]}>Суши</h1>
      <div className={styles["block__header"]}>
        <div className={styles["block__categories"]}>
          <div className={styles["block__categories-block"]}>
            {Categories__two.map((product) => (
              <div className={styles["block__categories-block-about"]}>
                <img src={product.icon} alt="" />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
          <div className={styles["block__categories-block"]}>
            {Categories.map((product) => (
              <div className={styles["block__categories-block-about"]}>
                <GlobalSvgIcons id={product.icon} />
                <p>{product.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["block__header-sorting"]}>
          <h3>Сортировка</h3>
          <select name="" id="">
            <option value="">По умолчанию</option>
            <option value="">Вегонская</option>
            <option value="">Новое</option>
            <option value="">Острое</option>
            <option value="">Горячий ролл</option>
          </select>
        </div>
      </div>
      <div className={styles["block__products"]}>
        {ProductSushi.map((product) => (
          <div className={styles["block__products-product"]}>
            <div className={styles["block__img"]}>
              <div className={styles['block__img-icons']}>
                <div>
                  <GlobalSvgIcons id={product.icon} />
                  <p>{product.icon__title}</p>
                </div>
                <div>
                  <GlobalSvgIcons id={product.icon__two} />
                  <p>{product.icon__title2}</p>
                  <p>{product.icon__title_two}</p>
                </div>
              </div>
              <img className={styles['img']} src={product.img} alt="" />
              <img className={styles['block__img-position']} src={product.icon__two} alt="" />
            </div>
            <div className={styles["block__text"]}>
              <div className={styles["block__text-mass"]}>
                <p>{product.mass}</p>
                <div></div>
                <p>{product.mass_two}</p>
              </div>
              <h1>{product.name}</h1>
              <p className={styles['block__text-filling']}>{product.filling}</p>
              <div className={styles["block__text-footer"]}>
                <div className={styles["block__text-footer-price"]}>
                  <span>{product.price_was}</span>
                  <div className={styles["line"]}></div>
                  {product.became} ₽
                </div>
                <Position product={product}>Заказать</Position>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sushi;
