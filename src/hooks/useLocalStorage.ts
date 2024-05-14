import { useState } from 'react';

export function useLocalStorage(
  key: string,
  initialValue: string | null,
): [string | null, (value: string | null) => void] {
  const [storedValue, setStoredValue] = useState<string | null>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== null ? item : initialValue;
    } catch (error) {
      console.error(`Error retrieving the localStorage item "${key}": `, error);
      return initialValue;
    }
  });

  const setValue = (value: string | null): void => {
    try {
      if (value === null) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, value);
      }
      setStoredValue(value);
    } catch (error) {
      console.error(`Error setting the localStorage key "${key}": `, error);
    }
  };

  return [storedValue, setValue];
}
