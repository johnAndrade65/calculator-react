//IMPORTS
import './App.css';
import './components/Calculator'
import Calculator from './components/Calculator';

//FUNCTION APP THAT TAKES THE CALCULATOR ELEMENT
function App() {
  return (
    <div className="App">
      <Calculator/>
    </div>
  );
}

//EXPORT DEFAULT APP WITH CALCULATOR ELEMENT TO INDEX.JS
export default App;
