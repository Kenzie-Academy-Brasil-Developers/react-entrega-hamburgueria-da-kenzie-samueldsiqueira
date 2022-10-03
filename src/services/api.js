import axios from 'axios';

const apiGateway = axios.create({
	baseURL: 'https://hamburgueria-kenzie-json-serve.herokuapp.com',
	timeout: 4000,
});

// const getAllProducts = async () => {
// 	try {
// 		const response = await apiGateway.get('/products');
// 		return response.data.results;
// 	} catch (error) {
// 		console.error(error);
// 	}
// };

export default apiGateway;
