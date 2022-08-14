import './product-card.styles.scss';
import Button from '../button/button.component';
// import products from '../../shop-data.json';

const ProductsCard = ({products}) => {
  const { name, imageUrl, price } = products;

  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='name-and-price-container'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button buttonType='inverted'>ADD TO CART</Button>
    </div>
  )
}

export default ProductsCard;