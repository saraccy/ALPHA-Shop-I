import styles from '../../components/Main/Main.module.css';
import StepProgress from './StepProgress/StepProgress.jsx'
import StepOne from './Step/StepOne/StepOne.jsx';
import StepTwo from './Step/StepTwo/StepTwo.jsx';
import StepThree from './Step/StepThree/StepThree';
import Cart from './Cart/Cart';
import StepControl from './StepControl/StepControl.jsx';
import { useState } from 'react';
import { StepThreeProvider } from './Context/CreditCardContext';
import { CartProvider }  from './Context/CartContext';

function Main() {
  const [step, setStep] = useState(1);
  function handleLeftClick() {
    step > 1 && setStep(step - 1)
  }
  function handleRightClick() {
    step < 3 && setStep(step + 1)
  }

  return(
    <main className={styles.siteMain}>
      <CartProvider>
      <StepThreeProvider>
      <div className={styles.mainContainer}>
        <section className={styles.registerContainer} data-phase="1" data-total-price="0">
          <StepProgress nowStep={step}/>
          <section className={styles.formContainer }>
            {step === 1 && <StepOne/>}
            {step === 2 && <StepTwo />}
            {step === 3 && <StepThree/>}
          </section>
        </section>
        <Cart/>
      </div>
      <StepControl
        handleLeftClick={handleLeftClick}
        handleRightClick={handleRightClick}
        stepNum = {step}
      />
      </StepThreeProvider>
      </CartProvider>
    </main>
  )
}

export default Main;