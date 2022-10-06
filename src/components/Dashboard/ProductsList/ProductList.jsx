import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import style from './ProductList.module.css';

const ProductList = ({ filteredProducts }) => {
	return (
		<div className={style.itemList}>
			<Swiper className='mySwiper'>
				<ul>
					{filteredProducts.map((product) => (
						<li key={product.id}>
							<SwiperSlide className={style.carrosselCenter}>
								<div className={style.productImage}>
									<img src={product.img} alt={product.name} />
								</div>
								<div className={style.productInfo}>
									<h3>{product.name}</h3>
									<span>{product.category}</span>
									<p>{product.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
									<div className={style.productBtn}>
										<button className={style.btnItem} onClick={(e) => console.log(product)}>
											Comprar
										</button>
									</div>
								</div>
							</SwiperSlide>
						</li>
					))}
				</ul>
			</Swiper>
		</div>
	);
};

export default ProductList;
