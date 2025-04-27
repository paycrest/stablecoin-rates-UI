import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Developers from "./pages/Developers";

function App() {
  return (
    <div className="bg-background min-h-screen flex flex-col relative pb-32">
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Developers />} path="/developers" />
      </Routes>
    </div>
  );
}

export default App;
