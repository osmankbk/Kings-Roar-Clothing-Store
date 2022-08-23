import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import './item-checkout.styles.scss';

const ItemCheckOut = ({ cartItem }) => {
  const { deleteCartItem, addItemToCart, decrementCartItemQuantity } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;

  const deleteItemInCart = () => deleteCartItem(cartItem);
  const increaseItemCountHandler = () => addItemToCart(cartItem);
  const decreaseItemCountHandler = () => decrementCartItemQuantity(cartItem);

  return (
    <div className="item-checkout-container">
      <div className='image-container'>
        <img src={imageUrl} alt={name}/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className="arrow" onClick={decreaseItemCountHandler}>&#10094;</div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={increaseItemCountHandler}>&#10095;</div>
      </span>
      <span className='price'>${price}</span>
      <div className="remove-button" onClick={deleteItemInCart}>&#10005;</div>
    </div>  
  )
}

export default ItemCheckOut;