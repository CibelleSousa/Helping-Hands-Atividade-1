import { useState } from 'react'
import './App.css'

import Header from './components/Header.jsx'
import SearchBar from './components/SearchBar.jsx'
import ServiceList from './components/ServiceList.jsx'

// "Mini-mock" temporário
const tempMockData = [
  { id: 1, nome: 'Letícia Oliveira', servico: 'Pet care', urlFoto: '', focoDescricao: 'Foco em cuidado atencioso e responsável para pets de pequeno e médio porte.' },
  { id: 2, nome: 'Renata França', servico: 'Shopping Assistant', urlFoto: '', focoDescricao: 'Auxílio em compras e organização de tarefas do dia a dia.' },
  { id: 3, nome: 'Felipe Araújo', servico: 'Diarista', urlFoto: '', focoDescricao: 'Serviços de limpeza e organização residencial com agilidade.' },
  { id: 4, nome: 'Bruno Costa', servico: 'Eletricista', urlFoto: '', focoDescricao: 'Manutenção elétrica residencial, reparos e instalações.' },
  { id: 5, nome: 'Mariana Lima', servico: 'Jardinagem', urlFoto: '', focoDescricao: 'Cuidado e manutenção de jardins, gramados e plantas ornamentais.' },
  { id: 6, nome: 'Carlos Eduardo', servico: 'Desenvolvedor Web', urlFoto: '', focoDescricao: 'Criação de sites e pequenas aplicações web sob demanda.' },
  { id: 7, nome: 'Vanessa Rocha', servico: 'Manicure e Pedicure', urlFoto: '', focoDescricao: 'Serviços de beleza e cuidado para unhas, com atendimento a domicílio.' },
  { id: 8, nome: 'Lucas Martins', servico: 'Pintor Residencial', urlFoto: '', focoDescricao: 'Pintura de interiores e exteriores, com foco em acabamento de qualidade.' },
  { id: 9, nome: 'Beatriz Almeida', servico: 'Aulas de Violão', urlFoto: '', focoDescricao: 'Aulas particulares de violão para iniciantes, do popular ao clássico.' },
  { id: 10, nome: 'Ricardo Souza', servico: 'Montador de Móveis', urlFoto: '', focoDescricao: 'Montagem e desmontagem de móveis de forma rápida e segura.' },
  { id: 11, nome: 'Juliana Nogueira', servico: 'Dog Walker', urlFoto: '', focoDescricao: 'Passeios diários e adestramento básico para cães de todos os portes.' },
  { id: 12, nome: 'Fernando Pereira', servico: 'Suporte de TI', urlFoto: '', focoDescricao: 'Resolução de problemas em computadores, notebooks e redes domésticas.' },
  { id: 13, nome: 'Aline Barros', servico: 'Chef de Cozinha', urlFoto: '', focoDescricao: 'Preparo de refeições personalizadas para eventos ou para a semana.' },
  { id: 14, nome: 'Gustavo Ribeiro', servico: 'Fotógrafo', urlFoto: '', focoDescricao: 'Cobertura fotográfica de eventos sociais e ensaios pessoais.' },
  { id: 15, nome: 'Camila Santos', servico: 'Tradutora (Inglês)', urlFoto: '', focoDescricao: 'Tradução de documentos e textos do inglês para o português.' },
  { id: 16, nome: 'Rafael Gomes', servico: 'Encanador', urlFoto: '', focoDescricao: 'Reparos hidráulicos, detecção e conserto de vazamentos.' },
  { id: 17, nome: 'Larissa Ferreira', servico: 'Babá', urlFoto: '', focoDescricao: 'Cuidado infantil com experiência e referências, disponível em horários flexíveis.' },
  { id: 18, nome: 'Thiago Mendes', servico: 'Motorista Particular', urlFoto: '', focoDescricao: 'Transporte para compromissos, viagens e aeroportos com segurança.' },
  { id: 19, nome: 'Sofia Azevedo', servico: 'Consultora de Estilo', urlFoto: '', focoDescricao: 'Ajuda para organizar o guarda-roupa e montar looks para diferentes ocasiões.' },
  { id: 20, nome: 'Daniel Andrade', servico: 'Professor de Reforço', urlFoto: '', focoDescricao: 'Aulas de reforço escolar em matemática e física para ensino fundamental e médio.' }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica de filtragem
  const filteredServices = tempMockData.filter(
      service => service.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <ServiceList services = {filteredServices}/>
    </>
  )
}

export default App
