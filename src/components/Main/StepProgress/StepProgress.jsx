import styles from './StepProgress.module.css';
import {  ReactComponent as CheckIcon } from '../../../icons/pg-complete.svg';

function ProgressGroup( {dataPhase, label, stepNum, nowStep}) {
  let iconElement;
  if (nowStep === 1 && stepNum === 1) {
    iconElement = <span className={styles.stepOneIcon}>{stepNum}</span>;
  } else if (nowStep === stepNum ) {
    iconElement = (
      <span
        className={styles.nowIcon}
      >{stepNum}</span>
    );
  } else if (nowStep < stepNum) {
    iconElement = (
      <span
        className={styles.undoneIcon}
      >{stepNum}</span>
    );
  } else {
    iconElement = (
      <span
        className={styles.undoneIcon}
      ><CheckIcon/></span>
    );
  }

  return (
  <span className={styles.progressGroup} data-phase={dataPhase}>
      {iconElement}
      <span className={stepNum > nowStep ? styles.undoneLabel : undefined}>{label}</span>
    </span>
  )
}

function StepProgress({nowStep}) {
  return (
    <>
      <h2 className={styles.registerTitle}>結帳</h2>
      <section className={styles.progressContainer}>
        <ProgressGroup 
          dataPhase="address" 
          label = "寄送地址"
          stepNum = {1}
          nowStep = {nowStep}
        />
        <span className={styles.doneProgressBar} data-order="1"></span>
        <ProgressGroup 
          dataPhase="shipping" 
          label = "運送方式"
          stepNum = {2}
          nowStep = {nowStep}
        />

        <span className={
          nowStep === 1 
            ?styles.unDoneProgressBar
            :styles.doneProgressBar
          }
          data-order="2"></span>
        <ProgressGroup 
          dataPhase="credit-card" 
          label = "付款資訊"
          stepNum = {3}
          nowStep = {nowStep}
        />
      </section> 
    </>     
  )
}

export default  StepProgress;