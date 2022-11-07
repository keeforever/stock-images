import { useEffect } from "react"

const useDebounce = (value,reload,callback,delay) => {

  useEffect(()=>{
    const handler=setTimeout(callback,delay)
    return ()=>{
      clearTimeout(handler)
    }
  },[value,reload])
  return ({value,callback,delay})
}

export default useDebounce
