import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col relative pb-32">
      <Header />
      <HeroPage className="flex-grow"/>
      <Footer />
    </div>
  );
}

export default App;
