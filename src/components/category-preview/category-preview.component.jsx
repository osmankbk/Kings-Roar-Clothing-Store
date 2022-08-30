import { Link } from 'react-router-dom';
import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';

const CategoryPreview = ({title, category}) => {

  return (
    <div className='category-preview-container'>
      <h2>
        <Link to={title} className='title'>{ title.toUpperCase() }</Link>
      </h2>
      <div className='preview'>
        { 
          category
          .filter((_, index) => index < 4)
          .map( 
            (product) => <ProductCard key={product.id} product={product}/> 
            )
        }
      </div>
    </div>
  )
}

export default CategoryPreview;