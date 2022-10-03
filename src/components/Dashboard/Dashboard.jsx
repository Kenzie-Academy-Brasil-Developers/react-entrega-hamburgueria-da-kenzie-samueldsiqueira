import { useEffect, useState } from "react";
import api from "../../services/api";
import Buttons from "./Buttons/Buttons.jsx";
import Header from "./Header/Header.jsx";
import ProductsList from "./ProductsList/ProductsList.jsx";
import Cart from "./Cart/Cart.jsx";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartOpen, setCartOpen] = useState(false);

  // useEffect(() => {
  //   api.get()



  const handleAddToCart = (product) => {
    const cartItem = cart.find((item) => item.id === product.id);
    if (cartItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (product) => {
    const cartItem = cart.find((item) => item.id === product
      .id);
    if (cartItem.quantity === 1) {
    } else {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : item
        )
      );
    }
  };

  const handleRemoveAllFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  }

  const handleCartOpen = () => {
    setCartOpen(true);
  }

  const handleCartClose = () => {
    setCartOpen(false);
  }

  useEffect(() => {
    setTotal(
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
  }
    , [cart]);
  
  return (
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
  );
};


export default Dashboard;


