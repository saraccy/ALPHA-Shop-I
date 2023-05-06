import styles from './Step.module.css'
import StepOne from "./StepOne"
// import StepTwo from "./StepTwo"
// import StepThree from "./StepThree"

export default function AllStep() {
  return(
    <>
      <section className={styles.formContainer}>
        
        {/* address phase */}
        <StepOne/>
        
        {/* shipping phase */}
        {/* <StepTwo/> */}

        {/* credit-card phase */}
        {/* <StepThree/> */}
      </section>
    </>
  )
}