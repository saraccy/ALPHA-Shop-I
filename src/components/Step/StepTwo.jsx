import styles from "../Step/Step.module.css";

function StepTwoGroup({dataPrice, id, checked, title, price, period}) {
  return (
    <label className={styles.radioGroup} data-price={dataPrice}>
      <input id={id} type="radio" name="shipping" checked={checked} />
      <div className={styles.radioInfo}>
        <div className={styles.radioTitle}>
          <div className={styles.radioText}>{title}</div>
          <div className={styles.radioprice}>{price}</div>
        </div>
        <div className={styles.radioperiod}>{period}</div>
      </div>
      <div className={styles.radioBoxBorder}></div>
    </label>
  )
}

export default function StepTwo() {
  return (
    <>
      <form data-phase="shipping">
          <h3 className={styles.formTitle}>運送方式</h3>
          <section className={styles.formBodyTwo}>
            <StepTwoGroup
              dataPrice={"0"}
              id={"shipping-standard"}
              checked={true}
              title={"標準運送"}
              price={"免費"}
              period={"約 3~7 個工作天"}
            />

            <StepTwoGroup
              dataPrice={"500"}
              id={"shipping-dhl"}
              checked={true}
              title={"DHL 貨運"}
              price={"500"}
              period={"48 小時內送達"}
            />
          </section>
        </form> 
    </>
  )
}