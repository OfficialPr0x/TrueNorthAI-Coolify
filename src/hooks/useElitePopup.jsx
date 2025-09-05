import { useState, createContext, useContext } from 'react'

const ElitePopupContext = createContext()

export const ElitePopupProvider = ({ children }) => {
  const [isElitePopupOpen, setIsElitePopupOpen] = useState(false)

  const openElitePopup = () => setIsElitePopupOpen(true)
  const closeElitePopup = () => setIsElitePopupOpen(false)

  return (
    <ElitePopupContext.Provider value={{
      isElitePopupOpen,
      openElitePopup,
      closeElitePopup
    }}>
      {children}
    </ElitePopupContext.Provider>
  )
}

export const useElitePopup = () => {
  const context = useContext(ElitePopupContext)
  if (!context) {
    throw new Error('useElitePopup must be used within an ElitePopupProvider')
  }
  return context
}
