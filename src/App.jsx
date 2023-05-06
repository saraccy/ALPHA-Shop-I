import "./components/Styles/reset.css";
import Header from './components/Header/Header.jsx'
import StepProgress from './components/StepProgress/StepProgress.jsx'
import AllStep from './components/Step/AllStep.jsx'
import ProgressControl from './components/ProgressControl/ProgressControl.jsx'
import styles from './App.module.css';
import Cart from './components/Cart/Cart.jsx';
import Footer from './components/Footer/Footer.jsx'

function App() {
  return (
    <div>
      <Header/>
      {/* main */}
        <main className={styles.siteMain}>
          <div className={styles.mainContainer}>

            {/* register */} 
            <section className={styles.registerContainer} data-phase="1" data-total-price = "0">
              
              <StepProgress/>
              <AllStep/>
            </section>

            <Cart/>
            <ProgressControl/>
          </div>
        </main>
        <Footer/>
      </div>
    );
  }

export default App;

