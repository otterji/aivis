import { USER_TOKEN_NAME } from '../constants';
import { useState } from 'react';

export const useLocalStorage = (
  defaultValue: string | null,
  keyName = USER_TOKEN_NAME,
) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(keyName);
      return item ? JSON.parse(item) : defaultValue;
    } catch (err) {
      console.log(`Error parsing the localStorage item "${keyName}": `, err);
      window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
      return defaultValue;
    }
  });

  const setValue = (newValue: string | null) => {
    try {
      console.log(newValue);
      const stringValue = JSON.stringify(newValue);
      window.localStorage.setItem(keyName, stringValue);
      setStoredValue(newValue);
    } catch (err) {
      console.log(`Error setting localStorage key "${keyName}": `, err);
    }
  };

  return [storedValue, setValue];
};
