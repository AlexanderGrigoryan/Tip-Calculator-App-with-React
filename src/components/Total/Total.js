import styles from "./Total.module.css";

function Total(props) {
  const {
    tipPerPerson,
    totalPerPerson,
    billInput,
    peopleInput,
    buttonValue,
    setBillInput,
    setPeopleInput,
    setButtonValue,
    setCustomValue,
    customValue,
    setInputAllredyChanged,
  } = props;
  return (
    <div className={styles.total__container}>
      <div className={styles.total__block}>
        <div className={styles.total__info}>
          <h2 className={styles.total__title}>Tip Amount</h2>
          <p className={styles.total__text}>/ person</p>
        </div>
        <p className={styles.total__amount} id={styles.tip__perperson}>
          ${tipPerPerson}
        </p>
      </div>
      <div className={styles.total__block}>
        <div className={styles.total__info}>
          <h2 className={styles.total__title}>Total</h2>
          <p className={styles.total__text}>/ person</p>
        </div>
        <p className={styles.total__amount} id={styles.total__perperson}>
          ${totalPerPerson}
        </p>
      </div>
      <button
        onClick={() => {
          if (
            billInput > 0 ||
            peopleInput > 0 ||
            buttonValue > 0 ||
            customValue > 0
          ) {
            setBillInput(0);
            setPeopleInput(0);
            setButtonValue(0);
            setCustomValue(0);
            setInputAllredyChanged(false);
          }
        }}
        className={`${styles.total__reset} ${
          billInput > 0 || peopleInput > 0 || buttonValue > 0
            ? styles.reset__active
            : ""
        }`}
      >
        Reset
      </button>
    </div>
  );
}

export default Total;
