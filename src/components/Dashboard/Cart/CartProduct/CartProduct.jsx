const CartProduct = ({ handleRemoveFromCart, currentSale }) => {
	return (
		<div className={style.productCard}>
			<div id={currentSale.id}>
				<div className={style.cardImage}>
					<img src={currentSale.img}></img>
				</div>
				<h3>{currentSale.name}</h3>
				<p>{currentSale.price}</p>
				<p>{currentSale.category}</p>
				<span>{currentSale.quantity}</span>
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
