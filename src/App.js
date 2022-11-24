import { useState } from "react";
import "./App.css";
import BillInput from "./components/BillInput/BillInput";
import PeopleInput from "./components/PeopleInput/PeopleInput";
import Header from "./components/Header/Header";
import TipButtons from "./components/TipButtons/TipButtons";
import Total from "./components/Total/Total";
import Dollar from "./img/icon-dollar.svg";
import Person from "./img/icon-person.svg";

function App() {
  const [billInput, setBillInput] = useState(0);
  const [peopleInput, setPeopleInput] = useState(0);
  const [buttonValue, setButtonValue] = useState(0);
  const [customValue, setCustomValue] = useState(0);
  const [inputAllreadyChanged, setInputAllredyChanged] = useState(false);

  const tipAmount =
    billInput > 0 && peopleInput > 0 && buttonValue > 0
      ? (billInput / 100) * buttonValue
      : null;
  const totalAmount =
    billInput > 0 && peopleInput > 0 && buttonValue > 0
      ? billInput + tipAmount
      : null;
  const tipPerPerson =
    billInput > 0 && peopleInput > 0 && buttonValue > 0
      ? parseFloat(tipAmount / peopleInput).toFixed(2)
      : "0.00";
  const totalPerPerson =
    billInput > 0 && peopleInput > 0 && buttonValue > 0
      ? parseFloat(totalAmount / peopleInput).toFixed(2)
      : "0.00";

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="count__content">
          <BillInput
            billInput={billInput}
            setBillInput={setBillInput}
            inputTitle={"Bill"}
            icon={Dollar}
          />
          <TipButtons
            customValue={customValue}
            setCustomValue={setCustomValue}
            buttonValue={buttonValue}
            setButtonValue={setButtonValue}
          />
          <PeopleInput
            peopleInput={peopleInput}
            setPeopleInput={setPeopleInput}
            inputTitle={"Number of People"}
            icon={Person}
            inputAllreadyChanged={inputAllreadyChanged}
            setInputAllredyChanged={setInputAllredyChanged}
          />
        </div>
        <Total
          inputAllreadyChanged={inputAllreadyChanged}
          setInputAllredyChanged={setInputAllredyChanged}
          customValue={customValue}
          setCustomValue={setCustomValue}
          setBillInput={setBillInput}
          setPeopleInput={setPeopleInput}
          setButtonValue={setButtonValue}
          tipAmount={tipAmount}
          totalAmount={totalAmount}
          billInput={billInput}
          tipPerPerson={tipPerPerson}
          peopleInput={peopleInput}
          totalPerPerson={totalPerPerson}
          buttonValue={buttonValue}
        />
      </div>
    </div>
  );
}

export default App;
