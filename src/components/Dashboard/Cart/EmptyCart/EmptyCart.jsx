import style from './EmptyCart.module.css';

const EmptyCart = () => {
	return (
		<div className={style.emptyCart}>
			<h3 className={style.emptyTitle}>Seu Carrinho está vazio!</h3>
			<p className={style.emptyInfo}>Adicione itens</p>
		</div>
	);
};

export default EmptyCart;
