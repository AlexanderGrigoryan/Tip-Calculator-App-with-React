import styles from "./PeopleInput.module.css";

function PeopleInput({
  peopleInput,
  inputTitle,
  icon,
  setPeopleInput,
  inputAllreadyChanged,
  setInputAllredyChanged,
}) {
  const HandlePeopleInputChange = (event) => {
    setPeopleInput(+event.target.value);
    if (isNaN(event.target.value)) {
      setPeopleInput("");
    }
    setInputAllredyChanged(true);
  };

  return (
    <div>
      <div className={styles.input__block}>
        <h1 className={styles.billinput__title}>{inputTitle}</h1>
        {peopleInput <= 0 && inputAllreadyChanged && (
          <p className={styles.error}>Can’t be zero</p>
        )}
      </div>
      <div className={styles.billinput__form}>
        <img className={styles.billinput__icon} src={icon} alt="dollar" />
        <input
          onChange={HandlePeopleInputChange}
          placeholder="0"
          value={peopleInput}
          type="text"
          pattern="\d*"
          maxLength="7"
          className={`${styles.billinput__input} ${
            peopleInput <= 0 && inputAllreadyChanged ? styles.input__error : ""
          }`}
        />
      </div>
    </div>
  );
}

export default PeopleInput;
