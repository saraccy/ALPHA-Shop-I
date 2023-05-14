import {useState} from 'react';
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

 function Products({ id, image, price, name, totalMinus, totalPlus}) {

  const[quantity, setQuantity] = useState(0);

  function handleMinusClick() {
    if(quantity > 0 ) {
      setQuantity(quantity - 1)
      totalMinus(price)
    }
  }

  function handlePlusClick() {
    setQuantity(quantity + 1)
    totalPlus(price)
  }


  return (
    <div key={id} className={styles.productContainer} data-price={price}>
      <img className={styles.imageContainer} src={image}/>
      <div className={styles.productInfo}>
        <div className={styles.productName}>{name}</div>
        <div className={styles.productControlContainer}>
          <div className={styles.productControl}>
            <img className={styles.minusIcon} src={MinusIcon} alt=""  onClick={handleMinusClick}/>
            <span className={styles.productCount}>{quantity}</span>
            <img className={styles.plusIcon} src={PlusIcon} alt=""  onClick={handlePlusClick}/>
          </div>
        </div>
        <div className={styles.productItemPrice}>${price*quantity}</div>
      </div>
    </div>
  )
}

export default function Cart() {
  const [total, setTotal] = useState(0);

  function totalMinus(price) {
    setTotal(total - price)
  }

  function totalPlus(price) {
    setTotal(total + price)
  }
  return(
    <>
      <section className={styles.cartContainer} >
          <h3 className={styles.cartTitle}>購物籃</h3>
          <section className={styles.productList} data-total-price="0">
            {productItems.map((item) => (
              <Products
                key = {item.id}
                image = {item.img}
                price = {item.price}
                name = {item.name}
                quantity = {item.quantity}
                totalMinus = {totalMinus}
                totalPlus = {totalPlus}
              />
            ))}
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