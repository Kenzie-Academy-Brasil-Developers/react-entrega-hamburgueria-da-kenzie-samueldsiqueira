import axios from 'axios';

const apiGateway = axios.create({
	baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com',
	timeout: 4000,
});

const getAllProducts = () => {
	try {
		const response = apiGateway.get('/products');
		console.log(response.data);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default getAllProducts;
