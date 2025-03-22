import "./App.css";
import Header from "./components/Header";
import CurrencyConverter from "./components/currencyConverter";

function App() {
  return <div className="bg-background h-screen">
    <Header/>
    <CurrencyConverter/>
  </div>;
}

export default App;
