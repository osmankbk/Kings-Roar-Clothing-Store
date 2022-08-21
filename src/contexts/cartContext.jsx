import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  const { id } = productToAdd;

  const cartItemExists = cartItems.find(item => item.id === id);

  if( cartItemExists) {
    return cartItems.map( (item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item );
  }
  return [...cartItems, {...productToAdd, quantity: 1}];
}

const CartProvider = ({children}) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [ cartItems, setCartItems ] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
  };

  return <CartContext.Provider value={ value } >{ children }</CartContext.Provider>
}

export default CartProvider;