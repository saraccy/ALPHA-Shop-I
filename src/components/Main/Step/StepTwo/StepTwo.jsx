import styles from './StepTwo.module.css';

function Shipping({ text, period, price}) {
  return(
    <label className={styles.radioGroup}  data-price="0">
      <input className={styles.shippingStandard} type="radio" name="shipping"  checked={true} />
      <div className={styles.radioInfo}>
        <div className={styles.container}>
          <div className={text === "DHL 貨運" ? styles.dhlText : styles.text}>{text}</div>
          <div className={styles.price}>{price}</div>
        </div>
        
        <div className={styles.period}>{period}</div>
      </div>
      <div className={styles.radioBoxBorder}></div>
    </label>
  )
}

function StepTwo() {
  return(
    <form className={styles.formContainer} data-phase="shipping">
    <h3 className={styles.formTitle}>運送方式</h3>
    <section className={styles.formBody}>
      <Shipping 
        text="標準運送"
        period="約 3~7 個工作天"
        price="免費"
      />
      <Shipping 
        text="DHL 貨運"
        period="48 小時內送達"
        price="$500"
      />
    </section>
  </form>
  )
}

export default StepTwo;