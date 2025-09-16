import { useState } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import ServiceList from './components/ServiceList.jsx'
import MockedData from './data/mockedServices.js'

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  /**
   * Lógica de filtragem principal da aplicação. 
   * Filtra a lista de serviços com base no 'searchTerm'.
   * A busca é flexível: procura o termo tanto no NOME do prestador quanto no SERVIÇO oferecido, e ignora maiúsculas/minúsculas.
   */
  const filteredServices = MockedData.filter(
      service => service.nome.toLowerCase().includes(searchTerm.toLowerCase()) || 
      service.servico.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <>
      <div className='app-container'>
        <Header />
        <main className='main-content'>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
          <h2 className='servicos'>Serviços</h2>
          <ServiceList services = {filteredServices}/>
        </main>
      </div>
    </>
  )
}

export default App
