import style from './CartProduct.module.css';

const CartProduct = ({ cartItem, quantity }) => {
  // const removeItem = () => {
  // 	if (cartItem.quantity === 1) {
  // 	}
  // };

  return (
    <div className={style.cartProducts}>
      {cartItem.length
        ? cartItem.map((cartItem) => (
          <div className={style.productContentCart} key={cartItem.id}>
            <div className={style.cartImage}>
              <img src={cartItem.img} />
            </div>

            <div className={style.cartTitles}>
              <h3>{cartItem.name}</h3>
              <p>{cartItem.category}</p>
            </div>
            <div className={style.cartRemoveItem}>
              <span>  {cartItem.quantity}</span>
            </div>
            <div className={style.cartButton}>
              <button type='submit' onClick={(e) => console.log(cartItem.quantity)}>
                Remover
              </button>
            </div>
          </div>
        ))
        : null}
      <div className={style.separate}>
        <hr />
      </div>
    </div>
  );
};

export default CartProduct;
