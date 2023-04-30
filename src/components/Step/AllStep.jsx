import StepOne from "./StepOne"
// import StepTwo from "./StepTwo"
// import StepThree from "./StepThree"

export default function AllStep() {
  return(
    <>
      <section className="form-container col col-12">
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