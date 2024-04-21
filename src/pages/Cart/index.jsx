import React, { useState } from "react";

import styles from "./Cart.module.scss";
import left from "../../assets/images/left.png";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import heart from "../../assets/images/heart.png";
import set from "../../assets/images/sushi_set.png";
import ButtonTwo from "../../components/Buttons/ButtonTwo";
import { WaterProduct } from "../../products/WaterProducts";
import Position from "../../components/Main/Top/Position";
import TopPosition from "../../products/TopPothition";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ModalReviews from "../../components/ModalReviews";

const Cart = () => {
  const products = useSelector((state) => state.product.product);
  const [modal, setOpenModal] = useState(false);

  const handleChange = () => {
    setOpenModal(true);
  };

  return (
    <>
      <ModalReviews modal={modal} setOpenModal={setOpenModal}/>
      <div className={styles["block"]}>
        <NavLink to="/" className={styles["block__return-home"]}>
          <img src={left} alt="" />
          <h2>Назад в каталог</h2>
        </NavLink>
        <div className={styles["block__line"]}></div>
        {products.map((product) => (
          <div className={styles["block__product"]}>
            <div className={styles["block__product-image"]}>
              <div className={styles["block__product-image-left"]}>
                <GlobalSvgIcons id="left" />
              </div>
              <img src={product.img} alt="" />
              <div className={styles["block__product-image-right"]}>
                <GlobalSvgIcons id="right" />
              </div>
            </div>
            <div className={styles["block__product-about"]}>
              <h1 className={styles["block__product-about-name"]}>
                {product.name}
              </h1>
              <div className={styles["block__product-about-mass"]}>
                <p>
                  Вес: <span>{product.mass}</span>
                </p>
              </div>
              <div className={styles["block__product-about-compound"]}>
                <div className={styles["about"]}>
                  <p>Белки</p>
                  <span>7,5 г</span>
                </div>
                <div className={styles["line"]}></div>
                <div className={styles["about"]}>
                  <p>Углеводы</p>
                  <span>16,6 г</span>
                </div>
                <div className={styles["line"]}></div>
                <div className={styles["about"]}>
                  <p>Жиры</p>
                  <span>3,8 г</span>
                </div>
                <div className={styles["line"]}></div>
                <div className={styles["about"]}>
                  <p>Калорийность</p>
                  <span>{product.mass_two}</span>
                </div>
              </div>
              <div className={styles["block__product-about-deliver"]}>
                <div className={styles["time"]}>
                  <div>
                    <GlobalSvgIcons id="scutor" />
                  </div>
                  <h2>Доставим за 40 мин</h2>
                </div>
                <div className={styles["block"]}>
                  <h2 className={styles["conditions"]}>Условия доставки</h2>
                  <div className={styles["line"]}></div>
                </div>
              </div>
              <div className={styles["block__product-about-filling"]}>
                <h2>Состав:</h2>
                <p>{product.filling}</p>
              </div>
              <div className={styles["block__product-about-footer"]}>
                <div className={styles["price"]}>
                  <span>{product.price_was}</span>
                  <div className={styles["line"]}></div>
                  {product.became} ₽
                </div>
                <div className={styles["count"]}>
                  <p>-</p>
                  <span>{product.count}</span>
                  <p>+</p>
                </div>
                <NavLink to='/Order' className={styles["button"]}>
                  <ButtonTwo>Заказать</ButtonTwo>
                </NavLink>
              </div>
            </div>
          </div>
        ))}
        <div className={styles["block__line"]}></div>
        <div className={styles["block__water"]}>
          <h1 className={styles["block__water-title"]}>
            С этим товаром покупают
          </h1>
          <div className={styles["block__water-products"]}>
            {WaterProduct.map((product) => (
              <div className={styles["block__water-product"]}>
                <img src={product.img} alt="" />
                <div className={styles["block"]}>
                  <div className={styles["block__water-product-about"]}>
                    <p>{product.liter}</p>
                    <h1>{product.name}</h1>
                  </div>
                  <div className={styles["block__water-product-footer"]}>
                    <div className={styles["price"]}>
                      <span>{product.price__was}</span>
                      <div className={styles["line"]}></div>
                      {product.became} ₽
                    </div>
                    <div>
                      <Position product={product}>Заказать</Position>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["block__recommend"]}>
          <h1 className={styles["block__recommend-title"]}>
            Рекомендуем попробовать
          </h1>
          <div className={styles["block__recommend-list"]}>
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
                <div className={styles["text"]}>
                  <p className={styles["text__mass"]}>
                    {product.mass} <div></div> {product.mass_two}
                  </p>
                  <h2 className={styles["text__name"]}>{product.name}</h2>
                  <p className={styles["text__filling"]}>{product.filling}</p>
                </div>
                <div className={styles["price"]}>
                  <div className={styles["price"]}>
                    <span>{product.price_was}</span>
                    <div className={styles["line"]}></div>
                    {product.became} ₽
                  </div>
                  <Position product={product}>Заказать</Position>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className={styles["block__review"]}>
          <div className={styles["block__review-first"]}>
            <div>
              <h1>Заказывали уже у нас?</h1>
              <p>Оставьте отзыв. Помогите нам стать лучше.</p>
            </div>
            <img src={heart} alt="" />
          </div>
          <div
            onClick={handleChange}
            className={styles["block__review-second"]}
          >
            Оставить отзыв
          </div>
        </div>
        <div className={styles["block__reviews"]}>
          <div className={styles["block__reviews-first"]}>
            <div className={styles["line"]}></div>
            <div className={styles["block__reviews-first-review"]}>
              <div className={styles["name"]}>
                <div className={styles["logo"]}>ЯР</div>
                <div>
                  <h1>Яна Рождественская</h1>
                  <p>12.02.2022</p>
                </div>
              </div>
              <div className={styles["title"]}>
                <div>
                  <GlobalSvgIcons id="star" />
                  <GlobalSvgIcons id="star" />
                  <GlobalSvgIcons id="star" />
                  <GlobalSvgIcons id="star" />
                  <GlobalSvgIcons id="star2" />
                </div>
                <p>
                  Суши очень вкусные!! Обожаем с мужем «запеченный
                  сет»🤤Доставка всегда своевременна. Курьеры приветливы.
                  Удобный сайт, большой выбор. Большая бутылка соуса, всегда в
                  пакетике есть салфетки. Для нас это однозначно «доставка суши»
                  № 1 в Краснодаре!
                </p>
              </div>
              <img src={set} alt="" />
            </div>
          </div>
          <div className={styles["block__reviews-second"]}>
            <div className={styles["line"]}></div>
            <div className={styles["block__reviews-second-review"]}>
              <div className={styles["name"]}>
                <div className={styles["logo"]}>МЖ</div>
                <div>
                  <h1>Марина Жук</h1>
                  <p>20.01.2022</p>
                </div>
              </div>
              <div className={styles["title"]}>
                <div>
                  <GlobalSvgIcons id="star" />
                  <GlobalSvgIcons id="star" />
                  <GlobalSvgIcons id="star" />
                  <GlobalSvgIcons id="star" />
                  <GlobalSvgIcons id="star" />
                </div>
                <p>
                  Очень вкусно, всегда у вас беру! Довольна скоростью доставки и
                  вкусом) Рекомендую
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
