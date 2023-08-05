import styles from './StepOne.module.css';
import StepOneData from "./StepOneData";

function Selected({ inputLabel, selectedItems }) {
  return (
    <>
      <div className={styles.inputGroup}>
        <div className={styles.inputLabel}>{inputLabel}</div>
        <div className={styles.selectContainer}>
          <select required>
            {selectedItems.map((item) => {
              return(
                <option key={item.value} value={item.value}>
                  {item.text}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  )
}

function InputGroup({ inputLabel, placeholder }) {
  return (
    <div className={styles.inputGroup}>
      <div className={styles.inputLabel}>{inputLabel}</div>
      <input type="text" placeholder={placeholder} />
    </div>
  )
}

function StepOne() {
  return (
    <>
      <form className={styles.formOne} data-phase="address">
        <h3 className={styles.formTitle}>寄送地址</h3>
        <section className={styles.formBody}>
          <div className={styles.lineOne}>
            <Selected inputLabel="稱謂" selectedItems={StepOneData.titles}/>
            <InputGroup inputLabel="姓名" placeholder="請輸入姓名"/>
          </div>

          <div className={styles.lineTwo}>
            <InputGroup inputLabel="電話" placeholder="請輸入行動電話"/>
            <InputGroup inputLabel="Email" placeholder="請輸入電子郵件"/>
          </div>

          <div className={styles.lineThree}>
            <Selected inputLabel="縣市" selectedItems={StepOneData.cities}/>
            <InputGroup inputLabel="地址" placeholder="請輸入地址"/>
          </div>
        </section>
      </form>
    </>
  )
 }

 export default StepOne;