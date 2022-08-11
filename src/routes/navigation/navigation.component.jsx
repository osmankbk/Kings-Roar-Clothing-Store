import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from '../../assets/crown.svg';

import { UserContext } from "../../contexts/userContext.component";
import { signUserOut } from "../../utilities/firebase/firebase.utilities";

import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  
  return (
    <Fragment>
      <div className="navigation">
        <Link className='link-logo-container' to='/'>
          <CrownLogo />
        </Link>
        <div className="navigation-container">
          <Link className="nav-link" to='/shop'>SHOP</Link>
          { 
            currentUser ? (<span className="nav-link" onClick={ signUserOut }>{''}SIGN OUT{''}</span>)
          : 
            ( <Link className="nav-link" to='/auth'>SIGN IN</Link> )
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;