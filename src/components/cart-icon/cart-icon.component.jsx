import { useContext } from 'react';
import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cartContext';

import './cart-icon.styles.scss';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  
  const toggleCartDropDown = () => setIsCartOpen(!isCartOpen);

  return(
    <div onClick={ toggleCartDropDown } className='cart-icon-container'>
      <ShoppingBagIcon className='shopping-icon'/>
      <span className='item-count'>{ cartItemCount} </span>
    </div>
  )
}

export default CartIcon;