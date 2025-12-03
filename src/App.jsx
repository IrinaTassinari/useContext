import { useState } from 'react'
import './App.css'
import ThemeContext from './context/ThemeContext'
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher.jsx'
import CounterProvider from './providers/counterProvider.jsx'
import CounterDisplay from './components/CounterDisplay/CounterDisplay.jsx'
import IncrementBtn from './components/IncrementBtn/IncrementBtn.jsx'
import DecrementBtn from './components/DecrementBtn/DecrementBtn.jsx'

function App() {
  // сост-е для хранения темы
  const [theme,setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <>
      <ThemeContext.Provider value={{theme,toggleTheme}}>
        <div className={`app ${theme}`}>
          <h1>Текущая тема: {theme}</h1>
          <ThemeSwitcher/>

          <CounterProvider>
            <CounterDisplay/>
            <IncrementBtn/>
            <DecrementBtn/>
          </CounterProvider>
        </div>
      </ThemeContext.Provider>
    </>
  )
}

export default App
