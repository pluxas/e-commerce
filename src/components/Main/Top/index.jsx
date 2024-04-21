import React from "react";

import styles from "./Top.module.scss";
import cute from "../../../assets/images/cute.png";
import GlobalSvgIcons from "../../../assets/icons/GlobalSvgIcons";
import Button from "../../Buttons/Button";
import TopPosition from "../../../products/TopPothition";
import Position from "./Position";

const Top = () => {
  return (
    <div className={styles["block"]}>
      <img className={styles["cute"]} src={cute} alt="" />
      <div className={styles["block__title"]}>
        <h2>Топ позиции</h2>
        <h2>Новинки</h2>
      </div>
      <div className={styles["block__list"]}>
          {TopPosition.map((product) => (
            <div className={styles["block__list-product"]}>
              <div className={styles["img"]}>
                <div>
                  <div>
                    <GlobalSvgIcons id={product.icon} />
                    <p>{product.icon__title}</p>
                  </div>
                  <div>
                    <GlobalSvgIcons id={product.icon__two} />
                    <p>{product.icon__two__title}</p>
                  </div>
                </div>
                <img src={product.img} alt="" />
                <img
                  className={styles["img__position"]}
                  src={product.position}
                  alt=""
                />
              </div>
              <div className={styles['text']}>
                <p className={styles['text__mass']}>{product.mass} <div></div> {product.mass_two}</p>
                <h2 className={styles['text__name']}>{product.name}</h2>
                <p className={styles['text__filling']}>
                    {product.filling}
                </p>
              </div>
              <div className={styles['price']}>
                    <div className={styles['price']}>
                        <span>{product.price_was}</span>
                        <div className={styles['line']}></div>
                        {product.became} ₽
                    </div>
                    <Position product={product}>
                        Заказать
                    </Position>
                </div>
            </div>
          ))}
      </div>
      <div className={styles["block__right"]}>
        <Button>
          <GlobalSvgIcons id="right" />
        </Button>
      </div>
    </div>
  );
};

export default Top;
