import React, { useState } from 'react'
import { ThemeProvider as SCThemeProvider } from 'styled-components'
import { light, dark, lightColors} from 'platinumfinancev2'




const CACHE_KEY = 'IS_DARK'

const ThemeContext = React.createContext({ isDark: null, toggleTheme: () => null })

const ThemeContextProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
    return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  })

  const toggleTheme = () => {
    setIsDark((prevState) => {
      localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
      return !prevState
    })
  }


  // customize light theme
  
  light.colors.text = '#fcbb59';
  light.nav.background='#000000';
  light.modal.background = '#000000'
  light.card.background = '#1E1E24';
  light.colors.dropdown = '#000000';
  light.colors.textSubtle='#fcbb59';
  lightColors.primary = "#dd5555";
  lightColors.secondary ='#fcbb59';
  lightColors.background = '#000000';
  light.card.cardHeaderBackground = {
    bubblegum: 'coral',
    violet: 'goldenrod',
    blue: 'aquamarine',
    default:'coral'
  };
  
  
  dark.colors.text = '#444';
  dark.card.background = '#111';
  dark.card.cardHeaderBackground = {
    default: 'bisque',
    violet: 'chartreuse',
    blue: 'blueviolet',
    bubblegum:'bisque'
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? light : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
