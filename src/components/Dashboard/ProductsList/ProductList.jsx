import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './ProductList.module.css';

const ProductList = ({ handleAddToCart, filteredProducts }) => {
	return (
		<div className={style.itemList}>
			<>
				<Swiper className='mySwiper'>
					{filteredProducts.map((product) => (
						<div className={style.contentCard}>
							<div className={style.productCard}>
								<SwiperSlide className={style.carrosselCenter} key={product.id}>
									<div className={style.productImage}>
										<img src={product.img} alt={product.name} />
									</div>
									<div className={style.productInfo}>
										<h3>{product.name}</h3>
										<span>{product.category}</span>
										<p>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
										<div className={style.productBtn}>
											<button className={style.btnItem} onClick={() => handleAddToCart(product)}>
												Comprar
											</button>
										</div>
									</div>
								</SwiperSlide>
							</div>
						</div>
					))}
				</Swiper>
			</>
		</div>
	);
};

export default ProductList;
