const TotalCart = ({ cartTotal, onClick }) => {
	return (
		<div>
			<div>
				<h2>Total</h2>
				<p>{cartTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
				<div></div>
				<button type='submit' onClick={onClick}>
					Remover Todos
				</button>
			</div>
		</div>
	);
};

export default TotalCart;
