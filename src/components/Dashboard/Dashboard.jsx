import Global from '../../styles/global';
import { useEffect, useState } from 'react';
import apiGateway from '../../services/api';
import Header from './Header/Header';
import ProductList from './ProductsList/ProductList';

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

	const handleSearch = (event) => {
		const { value } = event.target;
		const filtered = allProducts.filter((product) => {
			return product.category.toLowerCase().includes(value.toLowerCase());
		});
		setFilteredProducts(filtered);
	};

	const handleAddToCart = (product) => {
		const productAlreadyInCart = currentSale.find((item) => item.id === product.id);
		if (productAlreadyInCart) {
			const updatedCart = currentSale.map((item) => {
				if (item.id === product.id) {
					return {
						...item,
						quantity: item.quantity + 1,
					};
				}
				return item;
			});
			setCurrentSale(updatedCart);
		} else {
			setCurrentSale([...currentSale, { ...product, quantity: 1 }]);
		}
	};

	const handleRemoveFromCart = (product) => {
		const productAlreadyInCart = currentSale.find((item) => item.id === product.id);
		if (productAlreadyInCart) {
			const updatedCart = currentSale.map((item) => {
				if (item.id === product.id) {
					return {
						...item,
						quantity: item.quantity - 1,
					};
				}
				return item;
			});
			setCartTotal(cartTotal - product.price);
			setCurrentSale(updatedCart);
		}
	};

	return (
		<div>
			<Global />
			<Header handleSearch={handleSearch} />
			<ProductList filteredProducts={filteredProducts} handleAddToCart={handleAddToCart} />
		</div>
	);
};

export default Dashboard;
