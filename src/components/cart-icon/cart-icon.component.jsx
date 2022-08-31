import { useContext } from 'react';
// import { ReactComponent as ShoppingBagIcon } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cartContext';

import { CartIconContainer, ItemCount, ShoppingBagSvg} from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);
  
  const toggleCartDropDown = () => setIsCartOpen(!isCartOpen);

  return(
    <CartIconContainer onClick={ toggleCartDropDown } className='cart-icon-container'>
      <ShoppingBagSvg />
      <ItemCount className='item-count'>{ cartItemCount} </ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon;