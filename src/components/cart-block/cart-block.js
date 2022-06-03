import React, { useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { CartMenu } from "../cart-menu";
import { ItemsInCart } from "../items-in-cart";
import { calcTotalPrice } from '../utils';
import "./cart-block.css"; 

export const CartBlock = () => {
  const [isCartMenuVisible, setIsCartMenuVisible] = useState(false);
  const items = useSelector((state) => state.cart.itemsInCart);
  const history = useHistory();
  const totalPrice = calcTotalPrice(items);
  const handleGoToOrderClick = useCallback(() => {
    setIsCartMenuVisible(false);
    history.push('/order');
  }, [history]);

  return (
    <div className="cart-block">
      <ItemsInCart quantity={items.length}/>
      <AiFillStar
        color="yellow"
        size={25}
        className="cart-icon"
        onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
      />
      {totalPrice > 0 ? (
        <span className="total-price">{totalPrice} сом.</span>
      ) : null}
      {isCartMenuVisible && <CartMenu onClick={ handleGoToOrderClick }/>}
    </div>
  );
};
