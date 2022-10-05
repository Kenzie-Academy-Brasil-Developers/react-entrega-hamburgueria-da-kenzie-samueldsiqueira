const CartProduct = ({ id, name, price, category, quantity, handleRemoveFromCart, currentSale }) => {
	return (
		<div className={style.productCard}>
			<div id={id}>
				<div className={style.cardImage}>
					<img src={img}></img>
				</div>
				<h3>{name}</h3>
				<p>{price}</p>
				<p>{category}</p>
				<span>{quantity}</span>
				<button onClick={handleRemoveFromCart}>remover</button>
			</div>

			<div className='total'>
				<p>Total</p>
				<p>R$ {currentSale}</p>
				<button type='submit'>Remover Todos</button>
			</div>
		</div>
	);
};

export default CartProduct;
