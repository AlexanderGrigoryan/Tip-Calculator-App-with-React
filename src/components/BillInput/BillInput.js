import styles from "./BillInput.module.css";

function BillInput({ billInput, inputTitle, icon, setBillInput }) {
  const HandleBillInputChange = (event) => {
    setBillInput(+event.target.value);
    if (isNaN(event.target.value)) {
      setBillInput(0);
    }
  };

  return (
    <div>
      <h1 className={styles.billinput__title}>{inputTitle}</h1>
      <div className={styles.billinput__form}>
        <img className={styles.billinput__icon} src={icon} alt="dollar" />
        <input
          onChange={HandleBillInputChange}
          placeholder="0"
          value={billInput}
          type="text"
          pattern="\d*"
          maxLength="7"
          className={styles.billinput__input}
        />
      </div>
    </div>
  );
}

export default BillInput;
