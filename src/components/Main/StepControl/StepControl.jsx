import { ReactComponent as LeftArrow } from "../../../icons/left-arrow.svg";
import { ReactComponent as RightArrow } from "../../../icons/right-arrow.svg";
import styles from './StepControl.module.css';
import StepThreeContext from '../Context/CreditCardContext';
import CartContext from '../Context/CartContext';
import ShippingContext from "../Context/ShippingContext";
import { useContext } from 'react';

 function StepControl({handleLeftClick, handleRightClick, stepNum }) {

  const { data } = useContext(StepThreeContext);
  const {total} =  useContext(CartContext);
  const { selectedOption } = useContext(ShippingContext);
  const finalTotal = total + Number(selectedOption);
  function handleConfirmClick() {
    console.log(`
      購物車總金額:$ ${finalTotal}
      持卡人姓名:${data.cardName} 
      卡號：${data.cardNumber} 
      有效期限：${data.date} 
      CVC / CCV:${data.cvc}
      `
      )
  }

  return (
    <section className={styles.progressControlContainer}>
      <section className={styles.buttonGroupTwo} data-phase="shipping">
        <button className={styles.preBtn} style={{ visibility: stepNum === 1 && 'hidden' }} onClick={handleLeftClick}>
          <LeftArrow className={styles.leftArrow} />
          上一步
        </button>
        {stepNum === 3 ? 
          (
            <button className={styles.nextBtn} onClick={ handleConfirmClick}>
              <span>確認下單</span>
            </button>
          ):
          (
            <button className={styles.nextBtn} onClick=   {handleRightClick}>
              <span>下一步</span>
              <RightArrow className={styles.rightArrow}/>
            </button>
          )
        }
      </section>
    </section> 
  )
 }
 
export default StepControl;