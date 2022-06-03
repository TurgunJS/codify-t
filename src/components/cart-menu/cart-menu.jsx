import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../button";
import { CartItem } from "../cart-item";
import { calcTotalPrice } from "../utils";
import "./cart-menu.css"; 

export const CartMenu = ({ onClick }) => {
  
  const items = useSelector((state) => state.cart.itemsInCart);
  return (
    <div className="cart-menu">
      <div className="cart-menu__books-list">
        {items.length > 0
          ? items.map((book) => (
              <CartItem
                key={book.image}
                image={book.image}
                price={book.price}
                title={book.title}
                id={book.id}
              />
            ))
          : "Список желаемых книг пуст"}
      </div>
      {items.length > 0 ? (
        <div className="cart-menu__arrange">
          <div className="cart-menu__total-price">
            <span>Итого:</span>
            <span>{calcTotalPrice(items)} сом.</span>
          </div>
          <Button type="primary" size="m" onClick={onClick}>
            Оформить заказ
          </Button>
        </div>
      ) : null}
    </div>
  );
};
