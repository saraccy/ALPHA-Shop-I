import styles from './Step.module.css';
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree"


export default function AllStep({stepNum}) {
  return(
    <>
      <section className={styles.formContainer}>
        
        {/* address phase */}
        {stepNum === 1 && <StepOne/>}
        
        {/* shipping phase */}
        {stepNum === 2 && <StepTwo/>}

        {/* credit-card phase */}
        {stepNum === 3 && <StepThree/>}
      </section>
    </>
  )
}