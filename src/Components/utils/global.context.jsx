import { createContext, useContext, useEffect, useReducer } from "react";

const GlobalStates = createContext()

const favs = JSON.parse(localStorage.getItem('favs'));

const reducer = (state, action) => {
    switch (action.type) {
      case 'toggleTheme':
        if ( state.theme === 'light' ) {
          return {...state, theme: 'dark'}
        }
        else {
          return {...state, theme: 'light'}
        }
      
      case 'getData':
        return {...state,  data: action.payload }

      case 'addFav':
        return {...state,  favs: action.payload }

      default:
        return state;
    }
}

const Context = ({ children }) => {
  const initialState = { theme: "light", data: [], favs: favs }
  
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => { 
    const getData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')

      const data = await res.json();
      
      dispatch({ type: 'getData', payload: data });
    }

    getData()
    
  }, [])

  return (
      <GlobalStates.Provider value={{state, dispatch}}>
          { children }
      </GlobalStates.Provider>
  )
}

export default Context;

export const useGlobalStates = () => useContext(GlobalStates);


