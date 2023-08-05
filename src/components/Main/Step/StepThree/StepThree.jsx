import styles from './StepThree.module.css';
import StepThreeContext from '../../Context/CreditCardContext';
import { useContext } from 'react';

function InputGroup ({label, placeholder, name,}) {
  const { handleInputChange } = useContext(StepThreeContext);
  
  return(
    <div className={styles.inputGroup}>
      <div className={styles.inputLabel}>{label}</div>
      <input className={styles.stepThreeText} type="text" placeholder={placeholder} name={name} onChange={(e)=> handleInputChange(e)}/>
    </div>
  )
}

function StepThree() {
  
  return(
    <>
      <form className={styles.formContainer} data-phase="credit-card">
      <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={styles.formBody}>
          <div className={styles.containerOne}>
            <InputGroup
              label = "持卡人姓名"
              placeholder = "John Doe"
              name = "cardName"
            />
          </div>
          <div className={styles.containerOne}>
            <InputGroup
              label = "卡號"
              placeholder = "1111 2222 3333 4444"
              name = "cardNumber"
            />
          </div>
          <div className={styles.containerTwo}>
            <InputGroup
            label = "有效期限"
            placeholder = "MM/YY"
            name = "date"
            />
            <InputGroup
            label = "CVC / CCV"
            placeholder = "123"
            name = "cvc"
            />
          </div>
        </section>
      </form>
  </>
  )
}

export default StepThree;