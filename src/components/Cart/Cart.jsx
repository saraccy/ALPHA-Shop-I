import styles from './Cart.module.css';
import MinusIcon from '../../icons/minus.svg';
import PlusIcon from '../../icons/plus.svg';

const productItems = [
  {
    id: '1',
    name: '貓咪罐罐',
    img: 'https://picsum.photos/300/300?text=1',
    price: 100,
    quantity: 2,
  },
  {
    id: '2',
    name: '貓咪干干',
    img: 'https://picsum.photos/300/300?text=2',
    price: 200,
    quantity: 1,
  },
];

const products = productItems.map(productItem => 
  <div key={productItem.id} className={styles.productContainer} data-price={productItem.price}>
    <img className={styles.imageContainer} src={productItem.img}/>
    <div className={styles.productInfo}>
      <div className={styles.productName}>{productItem.name}</div>
      <div className={styles.productControlContainer}>
        <div className={styles.productControl}>
          <img className={styles.minusIcon} src={MinusIcon} alt="" />
          <span className={styles.productCount}>{productItem.quantity}</span>
          <img className={styles.plusIcon} src={PlusIcon} alt=""/>
        </div>
      </div>
      <div className={styles.productItemPrice}>${productItem.price}</div>
    </div>
  </div>);

export default function Cart() {
  let total = 0
  productItems.forEach(item => {
  total += (item.price * item.quantity) 
})
  return(
    <>
      <section className={styles.cartContainer} >
          <h3 className={styles.cartTitle}>購物籃</h3>
          <section className={styles.productList} data-total-price="0">
            {products}
          </section>

          <section className={styles.cartInfo}>
            <div className={styles.cartText}>運費</div>
            <div className={styles.cartPrice}>免費</div>
          </section>
          <section className={styles.cartInfo}>
            <div className={styles.cartText}>小計</div>
            <div className={styles.cartPrice}>${total}</div>
          </section>
        </section>
    </>
  )
}