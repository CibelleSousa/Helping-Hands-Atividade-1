import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import ServiceList from './components/ServiceList.jsx'

// "Mini-mock" temporário
const tempMockData = [
  {
    id: 1,
    nome: 'Letícia Oliveira',
    servico: 'Pet care specialist',
    urlFoto: 'url-da-foto-aqui', // Temporário
    focoDescricao: 'Focus: To provide loving, attentive, and responsible care for small and medium-sized pets...'
  },
  {
    id: 2,
    nome: 'Renata França',
    servico: 'Shopping Assistant',
    urlFoto: 'url-da-foto-aqui',
    focoDescricao: 'Focus: To provide loving, attentive, and responsible care for small and medium-sized pets...'
  },
  {
    id: 3,
    nome: 'Felipe Araújo',
    servico: 'House Cleaning Assistant',
    urlFoto: 'url-da-foto-aqui',
    focoDescricao: 'Focus: To provide loving, attentive, and responsible care for small and medium-sized pets...'
  }
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <SearchBar />
      <ServiceList services = {tempMockData}/>
    </>
  )
}

export default App
