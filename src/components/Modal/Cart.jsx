import React from "react";
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons";
import { useDispatch } from "react-redux";
import { removeToCart } from "../../slice/addCartSlice";

const Cart = ({ product, increase }) => {
  const { id, name, img, became, count } = product;
  const dispatch = useDispatch();

  const deleteProduct = () => {
    dispatch(removeToCart(id));
  };


  return (
    <>
      <div className="block__modal">
        <div className="block__modal-image">
          <img src={img} alt="" />
          <h1>{name}</h1>
        </div>
        <div className="about">
          <div className="block__modal-count">
            <p>-</p>
            <span>{count}</span>
            <p onClick={() => increase(id)}>+</p>
          </div>
          <h1 className="block__modal-price">{became} ₽</h1>
          <div onClick={deleteProduct} className="block__modal-trash">
            <GlobalSvgIcons id="trash" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
