import { useEffect, useState } from 'react'
import apiGateway from "../../services/api";
import Header from './Header/Header'


const Dashboard = () => {
  const [allProducts, setAllProducts] = useState([]) 

    useEffect(() => {
      apiGateway.get('/products')
        .then((response) => {
          setAllProducts(response.data)
        })
        .catch((error) => {
          console.error(error)
        })
      

    }, []);
  
  return (
    <div >
      <Header/>
      <main>
        <section>
          <ul>
              { allProducts.map((product) => (
                <li key={product.id}>
                  <img src={product.img} alt={product.name} />
                  <h3>{product.name}</h3>
                  <p>{product.category}</p>
                  <p>{product.price}</p>
                  <button>Adicionar ao carrinho</button>
                </li> 
             ))}
          </ul>
        </section>
        <section className='cart'>
          <h2>Carrinho</h2>
          <ul>
            <li>
              <img src="https://img.freepik.com/vetores-gratis/hamburguer-queijo-com-ilustracao-do-icone-do-vetor-dos-desenhos-animados-do-fogo-conceito-de-icone-de-objeto-de-comida-isolado-premium_138676-5539.jpg"></img>
              <h3>Nome do produto</h3>
              <p>Preço</p>
              <p>Quantidade</p>
              <p>Subtotal</p>
            </li>
          </ul>
          <div className='total'>
            <p>Total</p>
            <p>R$ 0,00</p>
            <button type="submit">Remover Todos</button>
          </div>

        </section>
      </main>
      </div>
  );
};


export default Dashboard;


