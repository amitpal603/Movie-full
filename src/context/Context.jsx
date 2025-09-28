import React, {children, createContext } from 'react'
export const  MovieStore = createContext()
function Context({children}) {

    const store = {

    }
  return <MovieStore.Provider value={store}>{children}</MovieStore.Provider>
}

export default Context
