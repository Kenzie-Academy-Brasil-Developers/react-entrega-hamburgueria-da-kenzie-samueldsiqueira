import style from './ProductList.module.css';

const ProductList = ({ filteredProducts, onClick }) => {
  return (
    <div className={style.productCard}>
      <div className={style.productImage}>
        <img src={filteredProducts.img} alt={filteredProducts.name} />
      </div>
      <div className={style.productInfo}>
        <h3>{filteredProducts.name}</h3>
        <span>{filteredProducts.category}</span>
        <p>{filteredProducts.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        <div className={style.productBtn}>
          <button className={style.btnItem} onClick={onClick}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
