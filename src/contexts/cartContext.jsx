import { createContext, useReducer } from "react";
import { createAction } from '../utilities/reducers/reducers.utilis';

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decrementCartItemQuantity: () => {},
  deleteCartItem: () => {},
  cartItemCount: 0,
  cartTotal: 0,
});

const addCartItem = (cartItems, productToAdd) => {
  const { id } = productToAdd;

  const cartItemExists = cartItems.find(item => item.id === id);

  if( cartItemExists) {
    return cartItems.map( (item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item );
  }
  return [...cartItems, {...productToAdd, quantity: 1}];
}

const decrementCartItem = (cartItems, cartItemToRemove) => {
  const { id } = cartItemToRemove;

  const cartItemExists = cartItems.find(item => item.id === id);

  if( cartItemExists) {
    return cartItems
    .map( (item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item )
    .filter((item) => item.quantity !== 0 );
  }
}

const cartItemToDelete = (cartItems, itemToDelete) => cartItems.filter((item) => item.id !== itemToDelete.id);

export const CART_ACTION_TYPES = {
  SET_IS_CART_OPEN: 'IS_CART_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS',
};

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload
      }  
    case CART_ACTION_TYPES.SET_CART_ITEMS: 
      return {
        ...state,
        ...payload
      }
    
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`)
  }

}

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartItemCount: 0,
  cartTotal: 0,
}

const CartProvider = ({children}) => {

  const [ { isCartOpen, cartItems, cartItemCount, cartTotal }, 
    dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartReducer = (newCartItems) => {
    const cartTotalCost = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    const cartTotalQuantity = newCartItems.reduce((total, current) => total + current.quantity, 0);

    const payload = { 
      cartItems: newCartItems, 
      cartItemCount: cartTotalQuantity, 
      cartTotal: cartTotalCost
      }
    return dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, payload));
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartReducer(newCartItems);
  }

  const setIsCartOpen = (bool) => {
    return dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
  }

  const decrementCartItemQuantity = (cartItemToRemove) => {
    const newCartItems = decrementCartItem(cartItems, cartItemToRemove);
    updateCartReducer(newCartItems);
  }

  const deleteCartItem = (productToDelete) => {
    const newCartItems = cartItemToDelete(cartItems, productToDelete);
    updateCartReducer(newCartItems);
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    decrementCartItemQuantity,
    deleteCartItem,
    cartTotal,

  };

  return <CartContext.Provider value={ value } >{ children }</CartContext.Provider>
}

export default CartProvider;