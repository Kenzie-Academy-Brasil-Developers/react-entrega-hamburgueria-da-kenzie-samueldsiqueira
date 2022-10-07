import Global from '../../styles/global';
import { useEffect, useState } from 'react';
import apiGateway from '../../services/api';
import Header from './Header/Header';
import ProductList from './ProductsList/ProductList';
import Cart from './Cart/Cart';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Container } from './styles';

const Dashboard = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState([]);
	const [cartItem, setCartItem] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);
	const [quantity, setQuantity] = useState(0);

	useEffect(() => {
		apiGateway
			.get('/products')
			.then((response) => {
				setAllProducts(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);

	useEffect(() => {
		setFilteredProducts(allProducts);
	}, [allProducts]);

	useEffect(() => {
		setCartItem(currentSale);
	}, [currentSale]);

	useEffect(() => {
		const total = cartItem.reduce((acc, product) => {
			return acc + product.price * product.quantity;
		}, 0);
		setCartTotal(total);
	}, [cartItem]);

	useEffect(() => {
		const totalQuantity = cartItem.reduce((acc, product) => {
			return acc + product.quantity;
		}, 0);
		setQuantity(totalQuantity);
	}, [cartItem]);

	const getCartItens = (product) => {
		const { id, name, price, category, img, quantity } = product;
		const productIndex = currentSale.findIndex((item) => item.id === product.id);
		if (productIndex >= 0) {
			const newSale = [...currentSale];
			newSale[productIndex].quantity += 1;
			setCurrentSale(newSale);
		} else {
			setCurrentSale((currentSale) => [...currentSale, { ...product, quantity: 1 }]);
		}
	};

	const handleSearch = (event) => {
		const { value } = event.target;
		const filtered = allProducts.filter((product) => {
			return product.category.toLowerCase().includes(value.toLowerCase());
		});
		setFilteredProducts(filtered);
	};

	const removeAllItem = () => {
		setCurrentSale([]);
	};

	return (
		<>
			<Global />
			<Header handleSearch={handleSearch} />

			<Swiper className='mySwiper'>
				{filteredProducts.map((filteredProducts) => (
					<SwiperSlide key={filteredProducts.id}>
						<ProductList filteredProducts={filteredProducts} onClick={() => getCartItens(filteredProducts)} />
					</SwiperSlide>
				))}
			</Swiper>

			<Cart cartItem={cartItem} cartTotal={cartTotal} quantity={quantity} removeAllItem={removeAllItem} />
		</>
	);
};

export default Dashboard;
