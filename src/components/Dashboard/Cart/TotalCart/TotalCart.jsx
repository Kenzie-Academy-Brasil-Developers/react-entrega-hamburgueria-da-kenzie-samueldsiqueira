import style from './TotalCart.module.css';

const TotalCart = ({ cartTotal, onClick }) => {
	return (
		<div className={cartTotal === 0 ? style.TotalCartContentHidden : style.TotalCartContent}>
			<div className={style.TotalCart}>
				<div>
					<h2>Total</h2>
				</div>
				<div>
					<p>{cartTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
				</div>
			</div>
			<div className={style.removeAllCart}>
				<button type='submit' onClick={onClick}>
					Remover Todos
				</button>
			</div>
		</div>
	);
};

export default TotalCart;
