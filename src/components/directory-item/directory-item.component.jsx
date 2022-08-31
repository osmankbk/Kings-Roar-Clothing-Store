import { useNavigate } from 'react-router-dom';

import {
  DirectoryItemContainer, 
  DirectoryImageDiv, 
  DirectoryDetails 
} from './directory-item.styles';

const DirectoryItem = ({category}) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const navigationHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={ navigationHandler }>
      <DirectoryImageDiv imageUrl={imageUrl}/>
      <DirectoryDetails>
        <h2>{ title }</h2>
        <p>Shop Now</p>
      </DirectoryDetails>
    </DirectoryItemContainer> 
  )
}

export default DirectoryItem;