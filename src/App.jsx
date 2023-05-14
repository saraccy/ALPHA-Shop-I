import "./components/Styles/reset.css";
import Header from './components/Header/Header.jsx'
import StepProgress from './components/StepProgress/StepProgress.jsx'
import AllStep from './components/Step/AllStep.jsx'
import ProgressControl from './components/ProgressControl/ProgressControl.jsx'
import styles from './App.module.css';
import Cart from './components/Cart/Cart.jsx';
import Footer from './components/Footer/Footer.jsx';
import { useState } from 'react';


function App() {
  const [ stepNum, setStep ] = useState(1);

  function onClickStep(e) {
    if (e.target.className.includes("nextBtn") && stepNum <= 3) {
    setStep(stepNum + 1);
  } else if (e.target.className.includes("previousBtn")) {
    setStep(stepNum - 1);
  }
}

  return (
    <div>
      <Header/>
      {/* main */}
        <main className={styles.siteMain}>
          <div className={styles.mainContainer}>

            {/* register */} 
            <section className={styles.registerContainer} data-phase={"1"} data-total-price = "0">
              
              <StepProgress stepNum={stepNum}/>
              <AllStep stepNum={stepNum}/>
            </section>

            <Cart/>
            <ProgressControl onClickStep={onClickStep} stepNum={stepNum}/>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }

export default App;

