import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";
import ItemCheckOut from '../../components/product-checkout/item-checkout.component';
import './checkout.styles.scss';


const CheckOut = () => {
  const { cartItems } = useContext(CartContext);
  return(
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {
        cartItems.map(item => <ItemCheckOut key={item.id} cartItem={item} />)
      }
      <span className="total">Total: 0</span>
    </div>
  )
}

export default CheckOut;