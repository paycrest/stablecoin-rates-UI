import Header from "./components/Header";
import Footer from "./components/Footer";
import CurrencyConverter from "./components/currencyConverter/CurrencyConverter";
import HeroSection from "./layout/HeroSection";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col relative pb-32">
      <Header />
      <HeroSection />
      <CurrencyConverter/>
      <Footer />
    </div>
  );
}

export default App;
