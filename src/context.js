import {useState,useContext,createContext} from 'react';


const AppContext=createContext()


const AppProvider = ({children}) => {
  const [searchParams, setSearchParams] = useState('')
 
  // fn-search params
  const inputHandler=(e)=>{
    const value=e.target.value
    setSearchParams(value)
  }


  return (
    <AppContext.Provider
    value={
      {
        inputHandler,
        searchParams
      }
    }
    >
      {children}
    </AppContext.Provider>
  )
}
const useGlobalContext=()=>{
  return useContext(AppContext)
}

export {useGlobalContext}
export default AppProvider
