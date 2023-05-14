import styles from './StepProgress.module.css'
import  PGCompleteIcon  from '../../icons/pg-complete.svg';

function Step({stepPhase, number, stepText, stepNum}){
  return (
    <>
      <span className={styles.progressGroup} data-phase={stepPhase}>
       
        {(stepNum === Number(number) &&  Number(number) === 1) && 
          (<span className={styles.progressIcon}> 
            <span className={styles.progressOne}>{number}</span>
            <img className={styles.pgComplete} src={PGCompleteIcon} alt=""/>
           </span>) }

        {(stepNum === Number(number) && (Number(number) ===
        2 || Number(number) === 3)) &&
        (<span className={styles.progressIcon}> 
          <span className={styles.progressNum}>{number}</span>
          <div className={styles.pgInProgress}></div>
         </span>) }

        {stepNum > Number(number) && 
        (<span className={styles.progressIcon}> 
          <span className={styles.completeNum}>&#10004;</span>
          <img className={styles.pgComplete} src={PGCompleteIcon} alt=""/>
        </span>) }

        {stepNum < Number(number) && 
        (<span className={styles.progressIcon}> 
          <span className={styles.UndoneNum}>{number}</span>
          <div className={styles.pgUndone}></div>
        </span>) }

        <span className="progress-label">{stepText}</span>
      </span>

      { Number(number) !== 3  && (
      <span className={styles.progressBar} data-order={number}></span>)}

    </>
  )
}

export default function StepProgress({stepNum}) {
  return (
    <>
      {/* register-title */}
      <h2 className={styles.registerTitle}>結帳</h2>

      {/* register-progress */}
      <section className={styles.progressContainer}>

        <Step 
          stepPhase="address" 
          number="1"
          stepText="寄送地址"
          stepNum={stepNum}
        />
        
        <Step 
          stepPhase="shipping" 
          number="2"
          stepText="運送方式"
          stepNum={stepNum}
        />

        <Step 
          stepPhase="credit-card" 
          number="3"
          stepText="付款資訊"
          stepNum={stepNum}
        />
      </section>
    </>
  )
}