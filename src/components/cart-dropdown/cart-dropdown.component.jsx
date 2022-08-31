import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/cartContext';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import { CartDropDownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckOut = () => {
    navigate('/checkout');
  }

  return(
    <CartDropDownContainer>
      <CartItems>
        {
          cartItems.length 
          ? ( 
          cartItems.map((item) => <CartItem key={item.id} cartItem={item}/>) 
          )
          : (
          <EmptyMessage>{'Your Cart is empty!'}</EmptyMessage>
          )
        }
      </CartItems>
      <Button onClick={ goToCheckOut }>CHECKOUT</Button>
    </CartDropDownContainer>
  )
}

export default CartDropdown;