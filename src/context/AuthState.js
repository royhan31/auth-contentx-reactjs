import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';


const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || {}
}

export const AuthContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function userRegister(user){
    dispatch({
      type: 'USER_REGISTER',
      payload: user
    });
  }

  function userLogin(user){
    dispatch({
      type: 'USER_LOGIN',
      payload: user
    });
  }

  return (<AuthContext.Provider value={{
    user: state.user,
    userRegister,
    userLogin
  }}>
      {children}
      </AuthContext.Provider>);
}
