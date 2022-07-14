import CategoryItem from '../category-item/category-item.component';
import './category-manu.styles.scss';

const CategoryManu = ({ categories }) => {
  return (
    <div className="categories-manu">
    { categories.map((category) => (
      <CategoryItem 
        key={ category.id } 
        category={ category }
      />
    ))}
  </div>
  )
}

export default CategoryManu;