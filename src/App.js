import { useRef, useState } from "react";
import "./App.css";

function App() {
   const [displayInput, setDisplayInput] = useState("");
   const [displayOutput, setDisplayOutput] = useState("0");

   const handleNumber = (e) => {
      const number = e.target.innerText;
      if (displayInput === "") {
         setDisplayInput(number);
      } else if (
         displayInput === "0" ||
         (displayInput.length === 3 && displayInput[displayInput.length - 1] === "0")
      ) {
         if (number === "0") {
            return;
         } else {
            setDisplayInput(number);
         }
      } else {
         setDisplayInput(displayInput + number);
      }
      if (displayOutput === "0") {
         setDisplayOutput(number);
      } else {
         setDisplayOutput(displayOutput + number);
         console.log(displayOutput);
      }
   };
   const handleOperation = (e) => {
      const operation = e.target.dataset.operation;
      if (displayInput === "") {
         if (operation === "-") {
            setDisplayInput(operation + " ");
         } else {
            return;
         }
      } else if (displayInput !== "") {
         setDisplayInput(operation + " ");
      }
      if (displayOutput === "0") {
         if (operation === "-") {
            setDisplayOutput(operation + " ");
         } else {
            return;
         }
      } else if (displayOutput !== "0") {
         //  if (true) {
         //     console.log(
         //        /[-|+|*|/]/.test(displayOutput[displayOutput.length - 2]),
         //        displayOutput.split("")[displayOutput.length - 2],
         //        displayOutput.split("")[displayOutput.length - 3],
         //        displayOutput.split("")[displayOutput.length - 4],
         //        displayOutput.split("")
         //     );
         //     setDisplayOutput(displayOutput + " " + operation + " ");
         //  }
         if (
            isNaN(parseFloat(displayInput.split("")[displayInput.length - 1])) &&
            /[-|+|*|/]/.test(displayOutput[displayOutput.length - 5])
         ) {
            setDisplayOutput(
               displayOutput.split("").slice(0, 1).join("") +
                  displayOutput.split("").slice(-1).join("") +
                  operation +
                  " "
            );
            console.log(displayOutput);
         } else {
            setDisplayOutput(displayOutput + " " + operation + " ");
            console.log(displayOutput);
         }
      }
   };

   const handleEauals = () => {
      if (isNaN(parseFloat(displayInput.split("")[displayInput.length - 1]))) {
         return;
      } else setDisplayOutput(eval(displayOutput));
   };

   const handleClear = () => {
      setDisplayInput("");
      setDisplayOutput("0");
   };

   const handleDecimal = () => {
      if (displayInput.split("").includes(".")) return;
      else {
         setDisplayOutput((prevState) => prevState + ".");
         if (!displayInput.split("").includes("0")) {
            setDisplayInput((prevState) => prevState + "0.");
         } else {
            setDisplayInput((prevState) => prevState + ".");
         }
      }
   };

   return (
      <div className="App">
         <div id="container">
            <div id="equals" onClick={handleEauals}>
               =
            </div>
            <div id="zero" onClick={handleNumber}>
               0
            </div>
            <div id="one" onClick={handleNumber}>
               1
            </div>
            <div id="two" onClick={handleNumber}>
               2
            </div>
            <div id="three" onClick={handleNumber}>
               3
            </div>
            <div id="four" onClick={handleNumber}>
               4
            </div>
            <div id="five" onClick={handleNumber}>
               5
            </div>
            <div id="six" onClick={handleNumber}>
               6
            </div>
            <div id="seven" onClick={handleNumber}>
               7
            </div>
            <div id="eight" onClick={handleNumber}>
               8
            </div>
            <div id="nine" onClick={handleNumber}>
               9
            </div>
            <div id="add" data-operation="+" onClick={handleOperation}>
               +
            </div>
            <div id="subtract" data-operation="-" onClick={handleOperation}>
               -
            </div>
            <div id="multiply" data-operation="*" onClick={handleOperation}>
               x
            </div>
            <div id="divide" data-operation="/" onClick={handleOperation}>
               /
            </div>
            <div id="decimal" onClick={handleDecimal}>
               .
            </div>
            <div id="clear" onClick={handleClear}>
               AC
            </div>
            <div id="result">
               <div id="display">{displayOutput}</div>
               <div id="input">{displayInput}</div>
            </div>
         </div>
      </div>
   );
}

export default App;
