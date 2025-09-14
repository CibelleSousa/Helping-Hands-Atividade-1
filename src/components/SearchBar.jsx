import { FaSearch, FaFilter } from "react-icons/fa";

function SearchBar(props) {
  return (
    <div className="search-container">
            <FaSearch className="search-icon"/>
            <input
            type="text"
            id="search"
            placeholder="Digite o nome do profissional"
            value={props.searchTerm}
            onChange={(e) => props.onSearchChange(e.target.value)}
            />
            <button type="button" className="filter-button"><FaFilter className="filter-icon"/></button>
        
    </div>
  )
}

export default SearchBar