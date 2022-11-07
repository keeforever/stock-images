import useDebounce from './useDebounce';
import {useState} from 'react';
/*
{
  boo:true,
  status:'Error...'
}

{type: 'cors', url: 'https://api.unsplash.com/search/photos/?client_id=…FN5jfOTpqVVUbv-vegbWPGqphcqim_U&page=0&query=uyuu', redirected: false, status: 403, ok: false, …}
*/
const useFetch = (url,reload) => {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(true)
  const [apiData, setApiData] = useState([])
  let resp={}
  // fetch data
  const fetchData=()=>{
    setIsError({
      boo:true,
      status:'Error...'
    })
    setIsLoading({
      boo:true,
      status:'Loading...'
    })
    fetch(url)
    .then((res)=>{
      resp=res
      console.log(res);
      if(res.ok){
        return res.json()
      }
        return res.json();
    })
    .then((data)=>{
      
      setApiData(data)
      setIsLoading({
        boo:false,
        status:'Loading...'
      })
      setIsError({
        boo:false,
        status:'Error...'
      })
    })
    .catch((err)=>{
      console.log(resp.status);
        if(resp.status===403){
          setIsLoading({
            boo:false,
            status:'Loading...'
          })
          setIsError({
            boo:true,
            status:'Request Limit Over'
          })
          return 1;
        }
      console.log(err);
      setIsLoading({
        boo:false,
        status:'Loading...'
      })
      setIsError({
        boo:true,
        status:'Error...'
      })
    })
  }
  // debounced fetch
  useDebounce(url,reload,fetchData,1000)
  return (
    {
      isLoading,
      isError,
      apiData
    }
    )
}

export default useFetch
