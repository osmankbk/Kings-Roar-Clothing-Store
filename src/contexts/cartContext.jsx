import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decrementCartItemQuantity: () => {},
  deleteCartItem: () => {},
  cartItemCount: 0,
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
  
  //Another way of decrementing checkout quantity
  // if( cartItemExists.quantity === 1) {
  //   return cartItems.filter((item) => item.id !== id);
  // }

  // return cartItems.map((item) => item.id === id ? { ...item, quatity: item.quantity - 1} : item);
}

const cartItemToDelete = (cartItems, itemToDelete) => cartItems.filter((item) => item.id !== itemToDelete.id);

const CartProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);
  const [ cartItemCount, setCartItemCount ] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const decrementCartItemQuantity = (cartItemToRemove) => {
    setCartItems(decrementCartItem(cartItems, cartItemToRemove));
  }

  const deleteCartItem = (productToDelete) => {
    setCartItems(cartItemToDelete(cartItems, productToDelete));
  }

  useEffect( () => {
    const cartTotal = cartItems.reduce((total, current) => total + current.quantity, 0);
    setCartItemCount(cartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemCount,
    decrementCartItemQuantity,
    deleteCartItem,

  };

  return <CartContext.Provider value={ value } >{ children }</CartContext.Provider>
}

export default CartProvider;