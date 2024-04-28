import React, { useState } from "react";

import "./Modal.scss";
import img from "../../assets/images/cart_img.png";
import ButtonTwo from "../Buttons/ButtonTwo";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";
import TopPosition from "../../products/TopPothition";

const Modal = ({ openModal, setOpenModal }) => {
  const product = useSelector((state) => state.product.product);
  const [cart, setCart] = useState(TopPosition);
  const totalPrice = product.reduce((acc, price) => (acc += price.became), 0);

  console.log(cart);


  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const increase = (id) => {
    console.log("Increase", id);

    setCart(
      cart.map((item) => {
        if (item.id === id) {
          console.log(item.count =+ 1);
        }
        return item;
      })
    )
  };

  return (
    <div className={openModal ? "block" : "block active"}>
      {product.length > 0 ? (
        <div className="block__product">
          {product.map((product) => (
            <Cart key={product.id} product={product} increase={increase} />
          ))}
          <div className="block__footer">
            <div className="block__footer-summa">
              <h1>Сумма заказа:</h1>
              <span>{totalPrice} ₽</span>
            </div>
            <NavLink onClick={handleCloseModal} to="/cart" className="block__footer-button">
              <ButtonTwo> Оформить заказ</ButtonTwo>
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="block__product">
          <div className="block__image">
            <img src={img} alt="" />
            <h1>Ваша корзина пуста</h1>
          </div>
          <div className="block__footer">
            <div className="block__footer-summa">
              <h1>Сумма заказа:</h1>
              <span>0 ₽</span>
            </div>
            <div onClick={handleCloseModal} className="block__footer-button">
              <ButtonTwo>В каталог</ButtonTwo>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
