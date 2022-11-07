import searchIcon from '../assets/search-icon.svg';
import { useGlobalContext } from '../context';
const SearchBar = () => {
  const {inputHandler} = useGlobalContext()
  return (
    <section className="search">
      <div className="search__bar">
        <input type="text" placeholder="Search..." className="search__input" onChange={inputHandler}/>
          <img className="search__icon" src={searchIcon} alt="Search-icon" />
      </div>
    </section>
  )
}

export default SearchBar;
