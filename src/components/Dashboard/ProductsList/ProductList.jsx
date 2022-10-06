import style from './ProductList.module.css';

const ProductList = ({ filteredProducts }) => {
	return (
		<>
			<div className={style.productImage}>
				<img src={filteredProducts.img} alt={filteredProducts.name} />
			</div>
			<div className={style.productInfo}>
				<h3>{filteredProducts.name}</h3>
				<span>{filteredProducts.category}</span>
				<p>{filteredProducts.price}</p>
				<div className={style.productBtn}>
					<button className={style.btnItem} onClick={(e) => console.log(filteredProducts)}>
						Comprar
					</button>
				</div>
			</div>
		</>
	);
};

export default ProductList;
