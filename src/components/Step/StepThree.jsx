import styles from "../Step/Step.module.css";

function StepThreeGroup({title, placeholder}) {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputLabel}>{title}</div>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}
export default function StepThree() {
  return (
    <>
      <form className={styles.StepThreeContainer} data-phase="credit-card">
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={styles.formBodyThree}>
          <div className={styles.areaOne}>
            <StepThreeGroup
              title={"持卡人姓名"}
              placeholder={"John Doe"}
            />
          </div>
  
          <div className={styles.areaOne}>
            <StepThreeGroup
              title={"卡號"}
              placeholder={"1111 2222 3333 4444"}
            />
          </div>

          <div className={styles.areaTwo}>
            <StepThreeGroup
              title={"有效期限"}
              placeholder={"MM/YY"}
            />

            <StepThreeGroup
              title={"CVC / CCV"}
              placeholder={"123"}
            />
       
          </div>
        </section>
      </form>
    </>
  )
}