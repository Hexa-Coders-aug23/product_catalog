import { useState } from 'react';
import { CartItem } from '../../types/CartItem';

type FunctionReturn = [CartItem[], (phonesToSet: CartItem[]) => void];

const KEY = 'cart';

export function useCartItems(initialItems: CartItem[]): FunctionReturn {
  const [phones, setPhones] = useState<CartItem[]>(() => {
    try {
      const storedData = localStorage.getItem(KEY);

      return storedData ? JSON.parse(storedData) : initialItems;
    } catch (e) {
      return initialItems;
    }
  });

  const save = (phonesToSet: CartItem[]) => {
    setPhones(phonesToSet);
    localStorage.setItem(KEY, JSON.stringify(phonesToSet));
  };

  return [phones, save];
}
