import  { ReactComponent as PlusBtn } from '../../../icons/plus.svg' ;
import  { ReactComponent as MinusBtn } from '../../../icons/minus.svg';
import styles from '../Cart/Cart.module.css';
import CartContext  from '../Context/CartContext';
import ShippingContext from '../Context/ShippingContext';
import { useContext } from 'react';

function Product({item}) {
  const { handleMinusClick, handlePlusClick,} = useContext(CartContext);
  return (
    <>
      <div className={styles.productContainer} data-count="0" data-price="3999">
        <img className={styles.imgContainer}src={item.img}/>

        <div className={styles.productInfo}>
          <div className={styles.productName}>{item.name}</div>

          <div className={styles.productControLContainer}>
            <div className={styles.productControl}>
              <MinusBtn className={styles.minusIcon} onClick={()=> handleMinusClick(item.id)}/>
              <span className={styles.productCount}>{item.quantity}</span>
              <PlusBtn className={styles.plusIcon} onClick={()=> handlePlusClick(item.id)}/>
            </div>
          </div>
          <div className={styles.productPrice}>${item.price}</div>

        </div>
      </div>
    </>
  )
}

function Cart() {
  const {nowCartData} = useContext(CartContext);
  const { selectedOption } = useContext(ShippingContext);
  const {total} = useContext(CartContext);
  const shippingPrice = Number(selectedOption)
  const totalPrice = total + shippingPrice;
  return(
    <>
      <section className={styles.cartContainer}>
        <h3 className={styles.cartTitle}>購物籃</h3>
        <section className={styles.productList} data-total-price="0">
          {nowCartData.map((data) => {
            return(
              <Product 
                key={data.id} 
                item={data} 
              />)
          })}
        </section>
        <section className={styles.cartInfo}>
          <div className={styles.cartText}>運費</div>
          <div className={styles.cartPrice}>${shippingPrice}</div>
        </section>
        <section className={styles.cartInfo}>
          <div className={styles.cartText}>小計</div>
          <div className={styles.cartPrice}>${totalPrice}</div>
        </section>
      </section>
    </>
    
  )
}

export default Cart;