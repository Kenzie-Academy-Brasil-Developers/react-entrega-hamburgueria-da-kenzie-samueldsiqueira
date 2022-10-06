import Global from '../../styles/global';
import { useEffect, useState } from 'react';
import apiGateway from '../../services/api';
import Header from './Header/Header';
import ProductList from './ProductsList/ProductList';
import Cart from './Cart/Cart';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Dashboard = () => {
	const [allProducts, setAllProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [currentSale, setCurrentSale] = useState([]);
	const [cartTotal, setCartTotal] = useState(0);

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
		const total = currentSale.reduce((acc, product) => {
			return acc + product.price * product.quantity;
		}, 0);
		setCartTotal(total);
	}, [currentSale]);

	const handleRemoveFromCart = (event) => {
		event.preventDefault();
		const productId = event.target.id;
		const productExists = currentSale.find((item) => item.id === productId);
		if (productExists.quantity === 1) {
			setCurrentSale(currentSale.filter((item) => item.id !== productId));
		}
		if (productExists.quantity > 1) {
			setCurrentSale(
				currentSale.map((item) => (item.id === productId ? { ...productExists, quantity: productExists.quantity - 1 } : item)),
			);
		}
	};

	const handleSearch = (event) => {
		const { value } = event.target;
		const filtered = allProducts.filter((product) => {
			return product.category.toLowerCase().includes(value.toLowerCase());
		});
		setFilteredProducts(filtered);
	};

	return (
		<div>
			<Global />
			<Header handleSearch={handleSearch} />
			<Swiper className='mySwiper'>
				{filteredProducts.map((filteredProducts) => (
					<SwiperSlide key={filteredProducts.id}>
						<ProductList filteredProducts={filteredProducts} />
					</SwiperSlide>
				))}
			</Swiper>
			<Cart currentSale={currentSale} handleRemoveFromCart={handleRemoveFromCart} />
		</div>
	);
};

export default Dashboard;
