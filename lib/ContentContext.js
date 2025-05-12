'use client'

import { createContext, useContext } from 'react'

const ContentContext = createContext(null)

export function ContentProvider({ content, children }) {
  return (
    <ContentContext.Provider value={content}>
      {children}
    </ContentContext.Provider>
  )
}

// Hook personalizado para acessar o contexto
export function useContent() {
  const context = useContext(ContentContext)
  if (!context) {
    throw new Error('useContent must be used within a ContentProvider')
  }
  return context
}
