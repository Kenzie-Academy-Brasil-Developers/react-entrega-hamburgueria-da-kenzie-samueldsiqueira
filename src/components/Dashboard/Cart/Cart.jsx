import CartProduct from './CartProduct/CartProduct';
import style from './Cart.module.css';

const Cart = ({ currentSale, handleRemoveFromCart, quantity }) => {
	return (
		<div className={style.cartContent}>
			<div className={style.cartTitle}>
				<h2>Carrinho de compras</h2>
			</div>
			<div>
				{currentSale.length < 0 ? (
					<CartProduct handleRemoveFromCart={handleRemoveFromCart} quantity={quantity} />
				) : (
					<div className={style.emptyCart}>
						<div className={style.emptyTitle}>
							<h2>Sua sacola está vazia</h2>
						</div>
						<div className={style.emptyInfo}>
							<p>Adicione itens</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
