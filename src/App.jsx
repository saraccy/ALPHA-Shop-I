import StepProgress from './components/StepProgress/StepProgress.jsx'
import AllStep from './components/Step/AllStep.jsx'
import ProgressControl from './components/ProgressControl/ProgressControl.jsx'
import styles from './App.module.css';

function App() {
  return (
    <>
      {/* main */}
        <main className="site-main">
          <div className={styles.mainContainer}>

            {/* register */}
            <section className={styles.registerContainer} data-phase="1" data-total-price = "0">

              {/* register-title */}
                <StepProgress/>
                
              {/* register-form */}
                <AllStep/>
            </section>

            {/* progress-control */}
              <ProgressControl/>
          </div>
        </main>
      </>
    );
  }

export default App;

