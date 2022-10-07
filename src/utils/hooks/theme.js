import { useContext } from 'react';
import { ThemeContext } from '../Context';

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  return { theme, toggleTheme }
}




