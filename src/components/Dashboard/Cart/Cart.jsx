import CartProduct from './CartProduct/CartProduct';
import TotalCart from './TotalCart/TotalCart';
import EmptyCart from './EmptyCart/EmptyCart';
import style from './Cart.module.css';

const Cart = ({ cartItem, quantity, cartTotal, removeAllItem }) => {
  return (
    <div className={style.cartContent}>
      <div className={style.cartTitle}>
        <h2>Carrinho de compras</h2>
      </div>
      <div>
        {cartTotal === 0 ? <EmptyCart /> : <CartProduct key={cartItem.id} cartItem={cartItem} quantity={quantity} onClick={(e) => console.log("teste")} />}
        <TotalCart cartTotal={cartTotal} onClick={() => removeAllItem(cartItem)} />
      </div>
    </div>
  );
};

export default Cart;
