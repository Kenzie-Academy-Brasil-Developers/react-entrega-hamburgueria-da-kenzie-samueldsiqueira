import { useEffect, useState } from 'react'
import './App.css'
import Global from './styles/global'
import getAllProducts from "./services/api";


function App() {

  getAllProducts()

  return (
    <div className="App">
        
      <Global/>
  <div className="dashboard">
      <header> <img src="https://img.freepik.com/vetores-gratis/hamburguer-queijo-com-ilustracao-do-icone-do-vetor-dos-desenhos-animados-do-fogo-conceito-de-icone-de-objeto-de-comida-isolado-premium_138676-5539.jpg"></img>
      <input type="search" name="" placeholder="encontre" id="" />
      </header>
      <main>
        <section>
          <ul>
            <li>
              <h1></h1>
            </li>
          </ul>
        </section>
    </main>
      
    </div>
  
    </div>
  )
}

export default App
