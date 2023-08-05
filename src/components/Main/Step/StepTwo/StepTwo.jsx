import styles from './StepTwo.module.css';
import { useState, useContext } from 'react';
import ShippingContext from '../../Context/ShippingContext';

function Shipping({value, isSelected ,text, period, price}) {
  const {handleInputChange} = useContext(ShippingContext);
  return(
    <label className={styles.radioGroup}  data-price="0">
      <input className={styles.shippingStandard} type="radio" name="shipping" value={value} checked={isSelected} onChange={handleInputChange}/>
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
  const {selectedOption} = useContext(ShippingContext);
  return(
    <form className={styles.formContainer} data-phase="shipping">
    <h3 className={styles.formTitle}>運送方式</h3>
    <section className={styles.formBody}>
      <Shipping 
        value = "0"
        isSelected={selectedOption === "0"}
        // onChange = {handleInputChange}
        text="標準運送"
        period="約 3~7 個工作天"
        price="免費"
      />
      <Shipping 
        value = "500"
        isSelected={selectedOption === "500"}
        // onChange = {handleInputChange}
        text="DHL 貨運"
        period="48 小時內送達"
        price="$500"
      />
    </section>
  </form>
  )
}

export default StepTwo;