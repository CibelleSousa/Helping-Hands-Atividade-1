import { FaSearch, FaFilter } from "react-icons/fa";

/**
 * Componente da barra de busca que permite ao usuário filtrar a lista de serviços.
 * É um componente controlado, cujo valor é gerenciado pelo componente pai (App.jsx).
 * @param {Object} props - As propriedades do componente.
 * @param {string} props.searchTerm - O valor atual do texto da busca.
 * @param {function(string): void} props.onSearchChange - Função para ser chamada quando o texto da busca muda.
 * @returns {JSX.Element} O formulário de busca.
 */
function SearchBar(props) {
  return (
    <div className="search-container">
            <FaSearch className="search-icon"/>
            <input
            type="text"
            id="search"
            placeholder="Digite o que deseja encontrar"
            value={props.searchTerm}
            onChange={(e) => props.onSearchChange(e.target.value)}
            />
            <button type="button" aria-label="Botão de filtro" className="filter-button"><FaFilter className="filter-icon"/></button>
        
    </div>
  )
}

export default SearchBar