import React, { useState, createContext } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const SurveyContext = createContext()

export const SurveyProvider = ({ children }) => {
  const [answers, setAnswers] = useState({});
  const saveAnswers = (newAnswers) => {
    setAnswers([...answers, ...newAnswers])
  }

  return (
    <SurveyContext.Provider value=  {{answers, saveAnswers}}>
      {children}
    </SurveyContext.Provider>
  )
}

export const TestContext = createContext()

export const TestProvider = ({children}) => {
  const [testText, setTestText] = useState('la variable est là bébé');

  return (
    <TestContext.Provider value={{testText, setTestText}}>
      {children}
    </TestContext.Provider>
  )
}