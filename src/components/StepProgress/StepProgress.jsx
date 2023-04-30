import styles from './StepProgress.module.css'
import  PGCompleteIcon  from '../../icons/pg-complete.svg';

function Step({stepPhase, stepNum, stepText}){
  return (
    <>
      <span className={styles.progressGroup} data-phase={stepPhase}>
        <span className={styles.progressIcon}>
          <span className={styles.progressNum}>{stepNum}</span>
          <img className={styles.pgComplete} src={PGCompleteIcon} alt=""/>
        </span>
        <span className="progress-label">{stepText}</span>
      </span>
    </>
  )
}

export default function StepProgress() {
  return (
    <>
      {/* register-title */}
      <h2 className={styles.registerTitle}>結帳</h2>
      {/* register-progress */}
      <section className={styles.progressContainer}>
        <Step stepPhase="address" stepNum="1" stepText="寄送地址"/>
        <span className={styles.progressBar} data-order={1} />
        <Step stepPhase="shipping" stepNum="2" stepText="運送方式"/>
        <span className={styles.progressBar} data-order={2} />
        <Step stepPhase="credit-card" stepNum="3" stepText="付款資訊"/>
      </section>
    </>
  )
}