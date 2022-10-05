import CartProduct from './CartProduct/CartProduct';
import EmptyCart from './EmptyCart/EmptyCart';

const Cart = ({ currentSale, handleRemoveFromCart, quantity }) => {
	return (
		<div className='cart'>
			<div>
				<h2>Carrinho de compras</h2>
			</div>
			<div>{currentSale.length > 0 ? <CartProduct /> : <EmptyCart />}</div>
		</div>
	);
};

export default Cart;
