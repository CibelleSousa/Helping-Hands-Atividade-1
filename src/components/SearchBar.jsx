function SearchBar(props) {
  return (
    <div>
        <label htmlFor="search">Buscar Serviço: </label>
        <input
        type="text"
        id="search"
        placeholder="Digite o nome do profissional"
        value={props.searchTerm}
        onChange={(e) => props.onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar