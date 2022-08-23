import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";

import './item-checkout.styles.scss';

const ItemCheckOut = ({cartItem, incrementItem, decrementItem, removeItem}) => {
  const { deleteCartItem } = useContext(CartContext);

  const { name, imageUrl, price, quantity } = cartItem;
  const clearitemHandler = () => deleteCartItem(cartItem);
  return (
    <div className="item-checkout-container">
      <div className='image-container'>
        <img src={imageUrl} alt={name}/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <div className="remove-button" onClick={clearitemHandler}>&#10005;</div>
    </div>  
  )
}

export default ItemCheckOut;