import logo from './logo.svg';
import './App.css';

function App() {

  const calculate = value => {
    var firstNumber = Number(document.getElementById("number1").value);
    var secondNumber = Number(document.getElementById("number2").value);

    var result;

    switch (value) {
      case '+':
        result = firstNumber + secondNumber;
        break;
      case '-':
        result = firstNumber - secondNumber;
        break;
      case '*':
        result = firstNumber * secondNumber;
        break;
      case '/':
        result = firstNumber / secondNumber;
        break;
      case '%':
        result = firstNumber % secondNumber;
        break;
    }

    document.getElementById("result").innerHTML = result;
  }


  return (
    <div className="App">
      <div className="calculator">
        <h2>Calculator</h2>
        <div className="inputs">
          <input type="text" id="number1" />
          <input type="text" id="number2" />
        </div>

        <div className="operations">
          <button onClick={() => calculate('+')}>+</button>
          <button onClick={() => calculate('-')}>-</button>
          <button onClick={() => calculate('*')}>*</button>
          <button onClick={() => calculate('/')}>/</button>
          <button onClick={() => calculate('%')}>%</button>
        </div>

        <span id="result">0</span>
      </div>
    </div>
  );
}

export default App;
