

// is page reached bottom
const isReachedBottom=()=>{
  const scrollHeight=document.body.scrollHeight
  if(window.innerHeight+window.scrollY> scrollHeight){
    return true;
  }
  return false;
}

export {isReachedBottom}