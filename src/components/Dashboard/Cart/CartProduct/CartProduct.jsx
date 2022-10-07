import style from './CartProduct.module.css';

const CartProduct = ({ cartItem, quantity }) => {
	// const removeItem = () => {
	// 	if (cartItem.quantity === 1) {
	// 	}
	// };

	return (
		<div>
			{cartItem.length > 0
				? cartItem.map((cartItem) => (
						<div className={style.productContentCart} key={cartItem.id}>
							<div className={style.cartImage}>
								<img src={cartItem.img} />
							</div>
							<div className={style.cartContent}>
								<div className={style.cartTitles}>
									<h3>{cartItem.name}</h3>
									<p>{cartItem.category}</p>
								</div>
								<div>
									<span> x {cartItem.quantity}</span>
								</div>
								<div className={style.cartButton}>
									<button type='submit' onClick={(e) => console.log(cartItem.quantity)}>
										Remover
									</button>
								</div>
							</div>
						</div>
				  ))
				: null}
		</div>
	);
};

export default CartProduct;
