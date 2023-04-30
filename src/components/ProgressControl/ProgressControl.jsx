import styles from './ProgressControl.module.css'
export default function ProgressControl(){
  return(
    <>
       <section className={styles.progressControlContainer}>
          <section className={styles.buttonGroup}  data-phase="address">
            <button className={styles.nextBtn}>
              下一步 →
            </button>
          </section>
          {/* <section className="button-group col col-12" data-phase="shipping">
            <button className="prev">
              <svg className="cursor-point">
                <use xlinkHref="#svg-icon-left-arrow" />
              </svg>
              上一步
            </button>
            <button className="next">
              下一步
              <svg className="cursor-point">
                <use xlinkHref="#svg-icon-right-arrow" />
              </svg>
            </button>
          </section>
          <section className="button-group col col-12" data-phase="credit-card">
            <button className="prev">
              <svg className="cursor-point">
                <use xlinkHref="#svg-icon-left-arrow" />
              </svg>
              上一步
            </button>
            <button className="next">
              確認下單
            </button>
          </section> */}
        </section>
    </>
  )
}