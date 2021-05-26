import React, { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    
  }, [])

  const getLog = () => {
    if(localStorage.getItem('token')){
      setIsLogged(true);
      return true;
    }
    return false;
  }

  return (
    <AuthContext.Provider value={{
      isLogged,
      getLog
    }}>
      { children }
    </AuthContext.Provider>
  )
}
