import React, { createContext } from 'react';
import { CartItem } from '../types/CartItem';
import { FavoriteItem } from '../types/FavoriteItem';
import { useCartItems } from './hooks/useCartItems';
import { useFavoriteItems } from './hooks/useFavoriteItems';

export enum QuantityOperation {
  Increase = 'increase',
  Decrease = 'decrease',
}

type DefaultValuesType = {
  cartItems: CartItem[];
  addToCart: (id: number) => void;
  removeFromCart: (id: number) => void;
  changeQuantity: (id: number, operation: QuantityOperation) => void;
  favoriteItems: FavoriteItem[];
  handleFavorite: (id: number) => void;
  setCartItems: (phonesToSet: CartItem[]) => void;
};

export const PhonesContext = createContext<DefaultValuesType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
  favoriteItems: [],
  handleFavorite: () => {},
  setCartItems: () => {},
});

export const PhonesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartItems, setCartItems] = useCartItems([]);
  const [favoriteItems, setFavoriteItems] = useFavoriteItems([]);

  const addToCart = (id: number) => {
    const newRecord: CartItem = {
      id,
      quantity: 1,
    };

    setCartItems([...cartItems, newRecord]);
  };

  const removeFromCart = (id: number) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);

    setCartItems(updatedCartItems);
  };

  const changeQuantity = (id: number, operation: QuantityOperation) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        switch (operation) {
          case QuantityOperation.Increase:
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          case QuantityOperation.Decrease:
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          default:
            return item;
        }
      }

      return item;
    });

    setCartItems(updatedCartItems);
  };

  const handleFavorite = (id: number) => {
    let updatedItems = [...favoriteItems];

    if (favoriteItems.includes(id)) {
      updatedItems = updatedItems.filter((item) => item !== id);
    } else {
      updatedItems.push(id);
    }

    setFavoriteItems(updatedItems);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    changeQuantity,
    favoriteItems,
    handleFavorite,
    setCartItems,
  };

  return (
    <PhonesContext.Provider value={contextValue}>
      {children}
    </PhonesContext.Provider>
  );
};
