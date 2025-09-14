import { FaSearch, FaFilter } from "react-icons/fa";

function SearchBar(props) {
  return (
    <div className="search-container">
        <div className="search-input-wrapper">
            <FaSearch className="search-icon"/>
            <input
            type="text"
            id="search"
            placeholder="Digite o nome do profissional"
            value={props.searchTerm}
            onChange={(e) => props.onSearchChange(e.target.value)}
            />
        </div>
        <div>
            <button type="button" className="filter-button"><FaFilter/></button>
        </div>
        
    </div>
  )
}

export default SearchBar