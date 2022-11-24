import styles from "./TipButtons.module.css";

function TipButtons({
  buttonValue,
  setButtonValue,
  customValue,
  setCustomValue,
}) {
  let tips = [5, 10, 15, 25, 50];

  const buttonsValue = (event) => {
    setButtonValue(+event.target.value);
    setCustomValue("");
  };

  const HandleTipInputChange = (event) => {
    setButtonValue(+event.target.value);

    setCustomValue(+event.target.value);
    console.log(event.target.value);
    if (isNaN(+event.target.value)) {
      setCustomValue("");
    }

    if (event.target.value > 100) {
      setCustomValue(100);
    }
  };

  return (
    <div className={styles.tipbuttons__container}>
      {tips.map((button) => {
        return (
          <button
            value={button}
            onClick={buttonsValue}
            className={`${styles.tipbuttons__button}  ${
              button === buttonValue ? styles.tipbutton__active : ""
            }`}
            key={button}
          >
            {button}%
          </button>
        );
      })}
      <input
        onChange={HandleTipInputChange}
        value={customValue}
        className={styles.tipbuttons__input}
        placeholder="Custom"
        min="0"
        type="number"
      />
    </div>
  );
}

export default TipButtons;
