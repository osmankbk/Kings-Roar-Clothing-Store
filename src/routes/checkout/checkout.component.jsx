import { useContext } from "react";

import { CartContext } from "../../contexts/cartContext";
import ItemCheckOut from '../../components/product-checkout/item-checkout.component';
import { CheckOutContainer, CheckOutHeader, HeaderBlock, TotalSpan} from './checkout.styles';


const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return(
    <CheckOutContainer>
      <CheckOutHeader>
        <HeaderBlock className="header-block">
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock className="header-block">
          <span>Remove</span>
        </HeaderBlock>
      </CheckOutHeader>
      {
        cartItems.map(item => <ItemCheckOut key={item.id} cartItem={item} />)
      }
      <TotalSpan>Total: ${cartTotal}</TotalSpan>
    </CheckOutContainer>
  )
}

export default CheckOut;