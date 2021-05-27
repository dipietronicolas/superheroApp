import React, { createContext, useState } from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isLogged, setIsLogged] = useState(false);
  
  const getLog = () => {
    if(localStorage.getItem('token')){
      setIsLogged(true);
      return true;
    }
    return false;
  }

  const logout = () => {
    localStorage.setItem('token', '');
    setIsLogged(false);
  }

  return (
    <AuthContext.Provider value={{
      isLogged,
      getLog,
      logout
    }}>
      { children }
    </AuthContext.Provider>
  )
}
