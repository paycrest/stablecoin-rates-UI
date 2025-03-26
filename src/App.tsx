import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CurrencyConverter from "./components/currencyConverter/CurrencyConverter";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col relative pb-32">
      <Header />
      <CurrencyConverter/>
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}

export default App;
