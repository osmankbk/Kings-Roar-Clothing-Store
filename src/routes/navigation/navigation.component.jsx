import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import { UserContext } from "../../contexts/userContext.component";
import { CartContext } from "../../contexts/cartContext";

import { signUserOut } from "../../utilities/firebase/firebase.utilities";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { NavigationDirectory, LogoLinkContainer, NavigationContainer, NavLink} from './navigation.styles'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  
  return (
    <Fragment>
      <NavigationDirectory>
        <LogoLinkContainer to='/'>
          <CrownLogo />
        </LogoLinkContainer>
        <NavigationContainer>
          <NavLink to='/shop'>SHOP</NavLink>
          { 
            currentUser ? (<NavLink as='span' onClick={ signUserOut }>{''}SIGN OUT{''}</NavLink>)
          : 
            ( <NavLink to='/auth'>SIGN IN</NavLink> )
          }
          <CartIcon />
        </NavigationContainer>
        { isCartOpen && <CartDropdown /> }
        
      </NavigationDirectory>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;