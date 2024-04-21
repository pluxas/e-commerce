import React from "react";

import styles from "./Deliver.module.scss";
import first from "../../assets/images/ic 1.png";
import second from "../../assets/images/green.png";
import third from "../../assets/images/yellow.png";
import fourth from "../../assets/images/map (1).png";
import fivth from "../../assets/images/05.png";
import sixth from "../../assets/images/ic 2.png";
import seventh from "../../assets/images/hand.png";
import eighth from "../../assets/images/cart.png";
import ninth from "../../assets/images/surprise.png";

const Deliver = () => {
  return (
    <div className={styles["block"]}>
      <div className={styles["block__header"]}>
        <h1>Доставка</h1>
        <img src={first} alt="" />
      </div>
      <div className={styles["block__zone"]}>
        <div className={styles["block__zone-level"]}>
          <div className={styles["first"]}>
            <img src={second} alt="" />
            <div>
              <h1>Зеленая зона</h1>
              <p>
                Доставка: <span>до 29 мин</span>
              </p>
              <p>
                Минимальная сумма заказа: <span>600 ₽</span>
              </p>
              <p>
                Доставляем <span>БЕСПЛАТНО</span>
              </p>
            </div>
          </div>
          <div className={styles["second"]}>
            <img src={third} alt="" />
            <div>
              <h1 className={styles["a"]}>Желтая зона</h1>
              <p>
                Доставка: <span>до 59 мин</span>
              </p>
              <p>
                Минимальная сумма заказа: <span>800 ₽</span>
              </p>
              <p>
                Доставляем <span>БЕСПЛАТНО</span>
              </p>
            </div>
          </div>
        </div>
        <div className={styles["block__zone-map"]}>
          <input type="text" placeholder="Выберите адрес" />
          <img src={fourth} alt="" />
        </div>
      </div>
      <div className={styles["block__information"]}>
        <div className={styles["block__information-header"]}>
          <img src={fivth} alt="" />
          <h1>Информация</h1>
        </div>
        <p className={styles["block__information-text"]}>
          Сервис доставки суши в Краснодаре «Рикша» предлагает чрезвычайно
          удобный механизм доставки и оплаты. Мы считаем, что наши стандарты
          работы должны быть классикой и комфортом для заказчика.
          <span>Прием заказов на доставку с 11:00 до 22:30.</span> <br />{" "}
          <div className={styles["s"]}></div> Итак, начнем по доставке. Мы делим
          Краснодар на зоны доставки — зеленую и желтую. Для каждой зоны мы
          четко определяем время приезда курьера и в случае задержки Вы
          получаете приятный сюрприз, о котором мы поговорим чуть позже. Для
          каждой из зон доставка является абсолютно бесплатной. <br />{" "}
          <div className={styles["s"]}></div> Доставка в зеленую зону Краснодара
          — до 29 минут (с 10:00 до 23:00. В другое время доставка в зеленую
          зону до 59 минут). Доставка в желтую зону — до 59 минут. Мы очень
          ценим Ваше время, поэтому всегда стараемся уложиться в минимальные
          сроки и измеряем время минутами, ведь каждая минута важна.
          Согласитесь, приятно получить вкусные суши в течение 29 минут, правда?{" "}
          <br /> <div className={styles["s"]}></div> Если курьер опаздывает, Вы
          получаете не только извинения, но и промокод на бесплатный ролл при
          следующем заказе!
        </p>
      </div>
      <div className={styles["block__payment"]}>
        <div className={styles["block__payment-header"]}>
          <h1>Оплата</h1>
          <img src={sixth} alt="" />
        </div>
        <div className={styles["block__payment-types"]}>
          <div className={styles["first"]}>
            <img src={seventh} alt="" />
            <h1>Оплата наличными</h1>
            <p>
              Рассчитывайтесь за свои любимые суши{" "}
              <span>Рикша наличными при получении.</span>
            </p>
          </div>
          <div className={styles["second"]}>
            <img src={eighth} alt="" />
            <h1>Оплата онлайн </h1>
            <p>
              Рассчитывайтесь за свои любимые
              <span>суши Рикша онлайн на сайте</span>
            </p>
          </div>
          <div className={styles["third"]}>
            <img src={ninth} alt="" />
            <h1>Оплата бонусами</h1>
            <p>
              Рассчитывайтесь за свои любимые суши{" "}
              <span>суши Рикша личными бонусами</span>
            </p>
          </div>
        </div>
        <p className={styles["block__payment-footer"]}>
          Мы предлагаем Вам 3 самых распространенных варианта для расчета:
          наличные, оплата онлайн или бонусами. Просто отметьте наиболее удобный
          для Вас способ оплаты при оформлении заказа на сайте или сообщите об
          этом оператору по телефону.
          <span>
            Доставка «Рикша» – это четкие стандарты работы, высокий уровень
            сервиса и забота о каждом госте. Мы ежедневно развиваемся, чтобы
            услышать три слова «Рикша – это любовь».
          </span>
        </p>
      </div>
    </div>
  );
};

export default Deliver;
