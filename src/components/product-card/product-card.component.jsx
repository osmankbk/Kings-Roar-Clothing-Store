import { useContext } from 'react';

import Button from '../button/button.component';
import { CartContext } from '../../contexts/cartContext';

import './product-card.styles.scss';

const ProductsCard = ({product}) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product)
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='name-and-price-container'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted' onClick={ addProductToCart }>ADD TO CART</Button>
    </div>
  )
}

export default ProductsCard;