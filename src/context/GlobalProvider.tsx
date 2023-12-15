import React, { createContext } from 'react';
import { CartItem } from '../types/CartItem';
import { FavoriteItem } from '../types/FavoriteItem';
import { useCartItems } from './hooks/useCartItems';
import { useFavoriteItems } from './hooks/useFavoriteItems';

enum QuantityOperation {
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
};

export const PhonesContext = createContext<DefaultValuesType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  changeQuantity: () => {},
  favoriteItems: [],
  handleFavorite: () => {},
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
    const udpatedItems = [...favoriteItems];

    if (favoriteItems.includes(id)) {
      udpatedItems.filter((item) => item !== id);
    } else {
      udpatedItems.push(id);
    }

    setFavoriteItems(udpatedItems);
  };

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    changeQuantity,
    favoriteItems,
    handleFavorite,
  };

  return (
    <PhonesContext.Provider value={contextValue}>
      {children}
    </PhonesContext.Provider>
  );
};
