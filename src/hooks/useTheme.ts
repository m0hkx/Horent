import { useEffect, useCallback } from 'react';
import useLocalStorage from './useLocalStorage';

type Theme = 'light' | 'dark';

interface UseThemeReturn {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

function useTheme(): UseThemeReturn {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'light');

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, [theme, setTheme]);

  // Apply theme class to document
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Check system preference on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Only apply system preference if no theme is stored
    const storedTheme = localStorage.getItem('theme');
    if (!storedTheme) {
      setTheme(mediaQuery.matches ? 'dark' : 'light');
    }

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  return {
    theme,
    setTheme,
    toggleTheme,
    isDark: theme === 'dark',
  };
}

export default useTheme;
