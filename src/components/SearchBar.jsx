function SearchBar(props) {
  return (
    <div className="search-container">
        <div className="search-input-wrapper">
            <input
            type="text"
            id="search"
            placeholder="Digite o nome do profissional"
            value={props.searchTerm}
            onChange={(e) => props.onSearchChange(e.target.value)}
            />
        </div>
        <div>
            <button type="button" className="filter-button">Filtros</button>
            <button type="button" className="search-button">Buscar</button>
        </div>
        
    </div>
  )
}

export default SearchBar