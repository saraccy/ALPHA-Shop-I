import RightArrowIcon from '../../icons/right-arrow.svg';
import LeftArrowIcon from '../../icons/left-arrow.svg';

import styles from './ProgressControl.module.css';



export default function ProgressControl({onClickStep,stepNum}){
  return(
    <>
       <section className={styles.progressControlContainer}>
        {stepNum === 1 && <StepOneBtn onClickStep={onClickStep} />}
        {stepNum === 2 && <StepTwoBtn onClickStep={onClickStep} />}
        {stepNum === 3 && <StepThreeBtn onClickStep={onClickStep} />}
        </section>
    </>
  )
}

function StepOneBtn({onClickStep}) {
  return(
    <section className={styles.buttonGroupOne}  data-phase="address">
      <button className={styles.nextBtn} onClick={onClickStep}>
        下一步 
        <img src={RightArrowIcon} alt="" />
      </button>
    </section>
  )
}

function StepTwoBtn({onClickStep}) {
  return(
    <section className={styles.buttonGroupTwo} data-phase="shipping">
      <button className={styles.previousBtn} onClick={onClickStep} >
        <img src={LeftArrowIcon} alt="" />
        上一步
      </button>
      <button className={styles.nextBtn} onClick={onClickStep}>
        下一步
        <img src={RightArrowIcon} alt="" />
      </button>
    </section>
  )
}

function  StepThreeBtn({onClickStep}) {
  return(
    <section className={styles.buttonGroupTwo} data-phase="credit-card">
      <button className={styles.previousBtn} onClick={onClickStep} >
        <img src={LeftArrowIcon} alt="" />
        上一步
      </button>
      <button className={styles.nextBtn} >
        確認下單
      </button>
    </section>
  )
}