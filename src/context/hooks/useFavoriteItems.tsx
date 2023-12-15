import { useState } from 'react';
import { FavoriteItem } from '../../types/FavoriteItem';

type FunctionReturn = [FavoriteItem[], (phonesToSet: FavoriteItem[]) => void];

const KEY = 'favorite';

export function useFavoriteItems(initialItems: FavoriteItem[]): FunctionReturn {
  const [phones, setPhones] = useState<FavoriteItem[]>(() => {
    try {
      const storedData = localStorage.getItem(KEY);

      return storedData ? JSON.parse(storedData) : initialItems;
    } catch (e) {
      return initialItems;
    }
  });

  const save = (phonesToSet: FavoriteItem[]) => {
    setPhones(phonesToSet);
    localStorage.setItem(KEY, JSON.stringify(phonesToSet));
  };

  return [phones, save];
}
