import useFetch from "../useFetch";
import Photo from "./GalleryCard";
import {useState,useEffect,useRef} from 'react';
import { isReachedBottom } from "../utils";
import {useGlobalContext} from '../context'
// const development
// const url='data.json'
// api
let url=''
const Gallery = () => {
  const {searchParams} = useGlobalContext();
  const [oldData,setNewData] = useState([])
  const [reload, setReload] = useState(0)
  const reloadRef=useRef(reload)
  const mounted=useRef(false)

   if(searchParams===''){
    url=`https://api.unsplash.com/photos/?client_id=RIa60flBLK8rFN5jfOTpqVVUbv-vegbWPGqphcqim_U&page=${reload}`
   }else{
    url=`https://api.unsplash.com/search/photos/?client_id=RIa60flBLK8rFN5jfOTpqVVUbv-vegbWPGqphcqim_U&page=${reload}&query=${searchParams}`
   }

  const {isLoading,isError,apiData} = useFetch(url)

  // page end --event
  const handler=()=>{ 
    if(isReachedBottom()){
      reloadRef.current=reloadRef.current+1
      console.log(reloadRef.current);
      setReload(reloadRef.current+1)
    }
  }

  useEffect(() => {
    document.addEventListener('scroll',handler)
    return () => {
    document.removeEventListener('scroll',handler)
    }
  },[])
  // fetch new and old data
  useEffect(()=>{
   
    if(searchParams===''){
      setNewData([...oldData,...apiData])
      mounted.current=true
      return 1;
    }
    console.log(apiData);
    if(apiData.results!==undefined){
      setNewData([...oldData,...apiData.results])
      mounted.current=true
    }
  },[apiData])
  // string search render
  useEffect(()=>{
    if(searchParams===''){
      setNewData([])
    }
    if(searchParams!==''){
      setNewData([])
    }
  },[searchParams])

  return (
    <>
    <section className="gallery-container">
      {
      !mounted.current ? 
      !(isLoading.boo || isError.boo ) ? oldData.map((image,index)=><Photo key={index} image={image}/>) : 
      null :oldData.map((image,index)=><Photo key={index} image={image}/>)
      }

    </section>
      {
        
      }
    {
      isLoading.boo ? 
      <h2 className="info-center">{isLoading.status}</h2> :  
      isError.boo ? <h2 className="info-center">{isError.status}</h2> : 
      apiData.results!==undefined ? apiData.results.length<1 ? <h2 className="info-center">No Results</h2> : 
      <div className='empty-cell'></div> :<div className='empty-cell'></div>
    }
    </>
  )
}
export default Gallery
