# Helping Hands - Atividade 1 (Dispositivos Móveis)

## 📖 Sobre o Projeto

**Helping Hands** é um protótipo de aplicação que busca conectar pessoas da comunidade, permitindo que elas ofereçam ou encontrem serviços, sejam eles gratuitos ou remunerados.

Este repositório contém a primeira parte do trabalho da disciplina de **Dispositivos Móveis (DEC000112)**, da Universidade Estadual de Santa Cruz (UESC). O objetivo foi construir uma interface funcional em React que servirá de base para o futuro aplicativo em React Native.

---

## ✨ Funcionalidades Implementadas

A interface desenvolvida implementa a funcionalidade de **"Consulta de Serviços"**, permitindo ao usuário:

* **Visualizar uma Lista de Serviços:** A página carrega uma lista com 100 prestadores de serviço, cada um com nome, foto, especialidade e descrição.
* **Busca Flexível em Tempo Real:** Uma barra de busca permite filtrar a lista dinamicamente. A busca é inteligente e procura correspondências tanto no **nome do prestador** quanto no **serviço oferecido**.
* **Interface Componentizada:** O código foi estruturado em componentes React reutilizáveis, seguindo as melhores práticas de desenvolvimento.

---

## 🚀 Tecnologias Utilizadas

* **React:** Biblioteca principal para a construção da interface.
* **Vite:** Ferramenta de build para um ambiente de desenvolvimento rápido e moderno.
* **JavaScript:** Linguagem base do projeto.
* **CSS:** Para a estilização.
* **React Icons:** Biblioteca para a utilização de ícones vetoriais na interface.

---

## 💻 Como Executar o Projeto

Para visualizar e testar o projeto em sua máquina local, siga os passos abaixo.

**Pré-requisitos:**
* [Node.js](https://nodejs.org/en) (versão 22.12+ ou superior).
* [Git](https://git-scm.com/) instalado.

**Passo a passo:**

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd Helping-Hands-Atividade-1
    ```

3.  **Instale as dependências do projeto:**
    ```bash
    npm install
    ```

4.  **Execute a aplicação em modo de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra seu navegador e acesse o endereço que aparecer no seu terminal.

---

## 📂 Estrutura de Pastas

O código-fonte do projeto está organizado da seguinte forma dentro da pasta `src/`:

* **`components/`**: Contém todos os componentes React reutilizáveis da aplicação (`Header`, `SearchBar`, `ServiceList`, `ServiceProviderCard`).
* **`data/`**: Contém o arquivo `mockedServices.js`, que simula a nossa base de dados.
* **`index.css`**: Folha de estilo que contém todo o design da página.
* **`App.jsx`**: Componente principal que organiza a página e gerencia o estado da aplicação.
* **`main.jsx`**: Ponto de entrada da aplicação React.

---

## 🧱 Estrutura de Dados

Para garantir a consistência do desenvolvimento, todos os componentes e lógicas seguiram o seguinte "contrato de dados" para os objetos que representam os prestadores de serviço.

| Campo | Tipo de Dado | Descrição | Exemplo |
| :--- | :--- | :--- | :--- |
| `id` | `Number` | Identificador numérico único para cada serviço. | `1` |
| `nome` | `String` | Nome completo do prestador de serviço. | `'Letícia Oliveira'` |
| `servico`| `String` | A especialidade ou o serviço principal oferecido. | `'Pet care specialist'` |
| `urlFoto`| `String` | A URL completa para a imagem de perfil do prestador. | `'https://.../leticia.jpg'` |
| `focoDescricao` | `String` | O parágrafo de descrição do serviço (Focus). | `'Focus: To provide loving...'` |

---

## 👩‍💻 Desenvolvedores

* **Cibelle Sousa Rodrigues** - *Estrutura do Projeto, Lógica dos Componentes, Props e States*
* **Alice Martins Valero** - *Dados Mockados*
* **Emanuel Humberto Menezes Cerqueira** - *Design e Estilização (CSS)*
