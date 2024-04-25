import Image from "next/image";
import "./CartItem.scss";
import { useContext } from "react";
import CartContext from "@/store/cart-context";
const CartItem = ({ item }) => {
  const { addItem, removeItem } = useContext(CartContext);
  const price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(item.totalPrice);
  return (
    <li className="cart-item">
      <div className="cart-item__products">
        <div className="cart-item__image">
          <Image
            className="cart-item__photo"
            width={100}
            height={100}
            src={item.image}
            alt={item.title}
          />
        </div>

        <div className="cart-item__text">
          <h3 className="cart-item__title">{item.title}</h3>
          <span className="cart-item__amount">{item.quantity}X</span>
        </div>
      </div>
      <div className="cart-item__details">
        <div className="cart-item__quantity">
          <span className="cart-item__add" onClick={() => addItem(item)}>
            +
          </span>
          <span>{item.quantity}</span>
          <span
            className="cart-item__remove"
            onClick={() => removeItem(item.id)}
          >
            -
          </span>
        </div>
        <div className="cart-item__price">{price}</div>
      </div>
    </li>
  );
};
export default CartItem;

// <button onClick={() => addItem(item)}>+</button>
//         <span>{item.quantity}</span>
//         <button onClick={() => removeItem(item.id)}>-</button>
